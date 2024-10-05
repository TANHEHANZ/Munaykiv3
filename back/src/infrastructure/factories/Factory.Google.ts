import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleConfig } from "./configure";
import { createUserGoogle, emailProfile } from "./auth.helpers";
import { GoogleProfileDTO } from "./auth.dto";

export function GoogleFactory() {
  const { clientID, clientSecret, callbackURL, scope } = googleConfig;

  if (!clientID || !clientSecret) {
    throw new Error("No se tiene el Client ID o Secret");
  }
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
          const email = emailProfile(profile);

          if (!email) {
            return done(new Error("No hay email"), undefined);
          }

          const googleProfile: GoogleProfileDTO = {
            email: email,
            name: profile.displayName || "Nombre desconocido",
            providerId: profile.id,
            providerType: "google",
          };

          await createUserGoogle(googleProfile, done);
        } catch (error) {
          console.error("Error al autenticar el usuario:", error);
          done(error);
        }
      }
    )
  );
}
