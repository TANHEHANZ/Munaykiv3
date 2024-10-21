import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { verification } from "./auth.helpers";
import UserService from "../../modules/users/service/userService";
import UserController from "../../modules/users/controller/userController";
import { facebookConfig } from "../config/authConstants";

export function FacebookFactory() {
  const { clientID, clientSecret, callbackURL, profileFields } = facebookConfig;
  if (!clientID || !clientSecret) {
    throw new Error("No se tiene el Client ID o Secret de Facebook");
  }
  const userService = new UserService();
  const userController = new UserController(userService);
  passport.use(
    new FacebookStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
        profileFields,
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        try {
          const userDTO = verification(profile);
          console.log("devuelve la verificacion :" ,userDTO);
          
          await userController.createUser(userDTO, done);
        } catch (error) {
          console.error("Error al autenticar el usuario:", error);
          done(error);
        }
      }
    )
  );
}
