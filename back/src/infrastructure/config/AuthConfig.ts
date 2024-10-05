import passport from "passport";
import { GoogleFactory } from "../factories/Factory.Google";
import { FacebookFactory } from "../factories/Factory.Facebook";

function AuthConfig() {
  const login = function (type: string) {
    switch (type) {
      case "google": {
        GoogleFactory();
        break;
      }
      case "facebook": {
        const facebookFactory = new FacebookFactory();
        facebookFactory.initialize();
        break;
      }
      default: {
        throw new Error(
          "No se escogió ningún método de inicio de sesión válido"
        );
      }
    }
  };

  return { login };
}

const authConfig = AuthConfig();

export { passport, authConfig };
