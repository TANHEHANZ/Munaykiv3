import { User as GoogleUser } from "passport-google-oauth20";

declare global {
  namespace Express {
    interface User extends GoogleUser {
      emails: { value: string }[];
      id: string;
    }
  }
}
