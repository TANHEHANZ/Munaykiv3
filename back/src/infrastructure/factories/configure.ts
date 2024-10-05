import dotenv from "dotenv";
import { CALLGOOGLE, GOOGLE_SCOPE } from "../../common/constants/constants";
dotenv.config();

export const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: CALLGOOGLE,
  scope: GOOGLE_SCOPE,
};
