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
  if (type === "google") {
    authConfig.login(type);
    passport.authenticate("google", { scope: GOOGLE_SCOPE })(req, res, next);
  }
  if (type === "facebook") {
    authConfig.login(type);
    passport.authenticate("facebook", { scope: FACEBOOK_SCOPE })(
      req,
      res,
      next
    );
  } else {
    return res.status(400).send("Error en la autenticación Me lleva");
  }
});

loginRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
  }),
  function (req, res) {
    res.redirect("/dashboard");
  }
);
loginRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
  }),
  function (req, res) {
    res.redirect("/dashboard");
  }
);
loginRouter.get("/success", (req, res) => {
  res.send(`
    ¡Autenticación exitosa! Bienvenido.
  `);
});

export { loginRouter };
