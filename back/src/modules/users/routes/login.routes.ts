import { Router } from "express";
import {
  FACEBOOK_SCOPE,
  GOOGLE_SCOPE,
} from "../../../common/constants/constants";
import {
  passport,
  authConfig,
} from "../../../infrastructure/config/AuthConfig";
const loginRouter = Router();

loginRouter.get("/:type", (req, res, next) => {
  const { type } = req.params;

  switch (type) {
    case "google":
      authConfig.login("google");
      passport.authenticate("google", { scope: GOOGLE_SCOPE })(req, res, next);
      break;
    case "facebook":
      authConfig.login("facebook");
      passport.authenticate("facebook", { scope: FACEBOOK_SCOPE })(
        req,
        res,
        next
      );
      break;
    default:
      res.status(400).send("Método de autenticación no soportado");
  }
});

loginRouter.get("/:type/callback", (req, res, next) => {
  const { type } = req.params;

  switch (type) {
    case "google":
      passport.authenticate("google", { session: false }, (err, user) => {
        if (err || !user) {
          return res.status(400).send("Error en la autenticación de Google");
        }
        res.redirect("/success");
      })(req, res, next);
      break;
    case "facebook":
      passport.authenticate(
        "facebook",
        { session: false },
        (err: any, user: any) => {
          if (err || !user) {
            return res
              .status(400)
              .send("Error en la autenticación de Facebook");
          }
          res.redirect("/success");
        }
      )(req, res, next);
      break;
    default:
      res.status(400).send("Método de autenticación no soportado");
  }
});

loginRouter.get("/success", (req, res) => {
  res.send(`
    <h1>Usuario autenticado con éxito</h1>
  `);
});

export { loginRouter };
