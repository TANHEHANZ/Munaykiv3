import { Router } from "express";
import { FACEBOOK_SCOPE, GOOGLE_SCOPE } from "../../common/constants/constants";
import { passport, authConfig } from "../../infrastructure/config/AuthConfig";
import ApiResponse from "../../infrastructure/config/response";
import AuthController from "./AuthController";

const loginRouter = Router();
const authController = new AuthController();

loginRouter.get("/:type", (req, res, next) => {
  const { type } = req.params;
  const appurl = req.query.appurl as string | undefined;
  console.log(appurl);
  if (type === "google") {
    authConfig.login(type);
    return passport.authenticate("google", {
      scope: GOOGLE_SCOPE,
      state: appurl,
    })(req, res, next);
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

// loginRouter.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//     failureMessage: true,
//     session: false,
//   }),
//   (req, res) => {
//     const User = req.user;
//     if (User) {
//       const token = authController.tokenAuth(User);
//       authController.verifyToken(token);
//       // Redirect to the dashboard after successful authentication
//       return res.redirect(`/dashboard?token=${token}`);
//     } else {
//       return ApiResponse.badRequest(res, "Error en la autenticación");
//     }
//   }
// );

// loginRouter.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     failureRedirect: "/login",
//     failureMessage: true,
//     session: false,
//   }),
//   (req, res) => {
//     const User = req.user;
//     if (User) {
//       const token = authController.tokenAuth(User);
//       authController.verifyToken(token);
//       // Redirect to the dashboard after successful authentication
//       return res.redirect(`/dashboard?token=${token}`);
//     } else {
//       return ApiResponse.badRequest(res, "Error en la autenticación");
//     }
//   }
// );

loginRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
  }),
  (req, res) => {
    const User = req.user;
    const { state } = req.query;
    if (User) {
      const token = authController.tokenAuth(User);
      authController.verifyToken(token);
      return res.redirect(state + "?token=" + token);
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
    const User = req.user;
    if (User) {
      const token = authController.tokenAuth(User);
      authController.verifyToken(token);
    } else {
      return ApiResponse.badRequest(res, "Error en la autenticación");
    }
  }
);

export { loginRouter };
