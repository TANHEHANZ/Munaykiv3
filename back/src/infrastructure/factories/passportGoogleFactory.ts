import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { CALLBACKURL, GOOGLE_SCOPE } from "../../common/constants/constants";
import { GoogleProfileDTO } from "./auth.dto";

dotenv.config();
const prisma = new PrismaClient();
const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

function emailProfile(profile: any): string | null {
  return profile?.emails?.[0]?.value ?? null;
}

export function GoogleFactory() {
  if (!clientID || !clientSecret) {
    throw new Error("No se tiene el Client ID o Secret");
  }
  passport.use(
    new GoogleStrategy(
      {
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: CALLBACKURL,
        scope: GOOGLE_SCOPE,
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

          const existingUser = await prisma.user.findUnique({
            where: { email: googleProfile.email },
          });
          if (existingUser) {
            //@ts-ignore
            return done(null, existingUser);
          }

          const newUser = await prisma.user.create({
            data: {
              email: googleProfile.email,
              name: googleProfile.name,
              providerId: googleProfile.providerId,
              providerType: googleProfile.providerType,
            },
          });
          //@ts-ignore
          done(null, newUser);
        } catch (error) {
          console.error("Error al autenticar el usuario:", error);
          done(error);
        }
      }
    )
  );
}
