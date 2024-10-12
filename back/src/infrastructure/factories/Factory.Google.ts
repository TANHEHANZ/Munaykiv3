import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleConfig } from "./configure";
import { verification } from "./auth.helpers";
import { UserDTO } from "./auth.dto";
import UserController from "../../modules/users/controller/userController";
import UserService from "../../modules/users/service/userService";

export function GoogleFactory() {
  const { clientID, clientSecret, callbackURL, scope } = googleConfig;

  if (!clientID || !clientSecret) {
    throw new Error("No se tiene el Client ID o Secret");
  }
  const userService = new UserService();
  const userController = new UserController(userService);

  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
        scope,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const userDTO = verification(profile);

          await userController.createUser(userDTO, done);
        } catch (error) {
          console.error("Error al autenticar el usuario:", error);
          done(error);
        }
      }
    )
  );
}
