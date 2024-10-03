import passport from "passport";
import {
  createGoogleStrategy,
  emails,
} from "../../../infrastructure/factories/passportGoogleFactory";

createGoogleStrategy();

export { passport, emails };
