import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { CALLFACEBOOK } from "../../common/constants/constants";
import { FacebookProfileDTO } from "./auth.dto";
import { AuthStrategyFactory } from "../implements/AuthStrategyFactory";

dotenv.config();
const prisma = new PrismaClient();
const clientID = process.env.FACEBOOK_CLIENT_ID;
const clientSecret = process.env.FACEBOOK_CLIENT_SECRET;

function getProfileData(profile: any): { email: string | null; name: string } {
  const email = profile?.emails?.[0]?.value ?? null;
  const name = profile.displayName || "Nombre desconocido";
  return { email, name };
}

export class FacebookFactory extends AuthStrategyFactory {
  initialize() {
    if (!clientID || !clientSecret) {
      throw new Error("No se tiene el Client ID o Secret de Facebook");
    }
    passport.use(
      new FacebookStrategy(
        {
          clientID: clientID,
          clientSecret: clientSecret,
          callbackURL: CALLFACEBOOK,
          profileFields: ["id", "emails", "name", "displayName"],
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const { email, name } = getProfileData(profile);
            if (!email) {
              return done(
                new Error(
                  "No se encontró un correo electrónico en el perfil de Facebook"
                ),
                undefined
              );
            }

            const facebookProfile: FacebookProfileDTO = {
              email: email,
              name: name,
              providerId: profile.id,
              providerType: "facebook",
            };

            const existingUser = await prisma.user.findUnique({
              where: { email: facebookProfile.email },
            });

            if (existingUser) {
              return done(null, existingUser);
            }

            const newUser = await prisma.user.create({
              data: {
                email: facebookProfile.email,
                name: facebookProfile.name,
                providerId: facebookProfile.providerId,
                providerType: facebookProfile.providerType,
              },
            });

            done(null, newUser);
          } catch (error) {
            console.error("Error al autenticar el usuario:", error);
            done(error);
          }
        }
      )
    );
  }
}
