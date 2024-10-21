import { Router } from "express";
import {
  FACEBOOK_SCOPE,
  GOOGLE_SCOPE,
} from "../../../common/constants/constants";
import {
  passport,
  authConfig,
} from "../../../infrastructure/config/AuthConfig";
import ApiResponse from "../../../infrastructure/config/response";

const loginRouter = Router();

loginRouter.get("/:type", (req, res, next) => {
  const { type } = req.params;
  if (type === "google") {
    authConfig.login(type);
    return passport.authenticate("google", { scope: GOOGLE_SCOPE })(
      req,
      res,
      next
    );
  } else if (type === "facebook") {
    authConfig.login(type);
    return passport.authenticate("facebook", { scope: FACEBOOK_SCOPE })(
      req,
      res,
      next
    );
  } else {
    return ApiResponse.badRequest(
      res,
      "Error en la autenticación: método no válido"
    );
  }
});

loginRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
  }),
  (req, res) => {
    if (req.user) {
      return ApiResponse.success(
        res,
        "Autenticación exitosa con Google",
        req.user
      );
    } else {
      return ApiResponse.badRequest(res, "Error en la autenticación");
    }
  }
);

loginRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
  }),
  (req, res) => {
    if (req.user) {
      return ApiResponse.success(
        res,
        "Autenticación exitosa con Facebook",
        req.user
      );
    } else {
      return ApiResponse.badRequest(res, "Error en la autenticación");
    }
  }
);

loginRouter.get("/success", (req, res) => {
  ApiResponse.success(res, "¡Autenticación exitosa! Bienvenido.");
});

export { loginRouter };
