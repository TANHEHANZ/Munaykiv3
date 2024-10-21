import dotenv from "dotenv";
import {
  CALLFACEBOOK,
  CALLGOOGLE,
  GOOGLE_SCOPE,
  PROFILEFIELDS,
} from "../../common/constants/constants";
dotenv.config();

export const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: CALLGOOGLE,
  scope: GOOGLE_SCOPE,
};

export const facebookConfig = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: CALLFACEBOOK,
  profileFields: PROFILEFIELDS,
};
