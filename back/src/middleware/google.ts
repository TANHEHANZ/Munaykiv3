import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientID || !clientSecret) {
  throw new Error("Google Client ID and Secret must be defined");
}
export const emails: string[] = [];

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ["profile", "email"],
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: (err: any, user?: any) => void
    ) => {
      const email = profile.emails ? profile.emails[0].value : null;
      if (email) {
        if (!emails.includes(email)) {
          emails.push(email);
        }
        done(null, profile);
        console.log([profile]);
      } else {
        done(new Error("No email found on profile"), null);
      }
    }
  )
);
