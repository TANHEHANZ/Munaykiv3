"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const constants_1 = require("../../common/constants/constants");
const AuthConfig_1 = require("../../infrastructure/config/AuthConfig");
const response_1 = __importDefault(require("../../infrastructure/config/response"));
const AuthController_1 = __importDefault(require("./AuthController"));
const loginRouter = (0, express_1.Router)();
exports.loginRouter = loginRouter;
const authController = new AuthController_1.default();
loginRouter.get("/:type", (req, res, next) => {
    const { type } = req.params;
    const appurl = req.query.appurl;
    console.log(appurl);
    if (type === "google") {
        AuthConfig_1.authConfig.login(type);
        return AuthConfig_1.passport.authenticate("google", {
            scope: constants_1.GOOGLE_SCOPE,
            state: appurl,
        })(req, res, next);
    }
    else if (type === "facebook") {
        AuthConfig_1.authConfig.login(type);
        return AuthConfig_1.passport.authenticate("facebook", { scope: constants_1.FACEBOOK_SCOPE })(req, res, next);
    }
    else {
        return response_1.default.badRequest(res, "Error en la autenticación: método no válido");
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
loginRouter.get("/google/callback", AuthConfig_1.passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
}), (req, res) => {
    const User = req.user;
    const { state } = req.query;
    if (User) {
        const token = authController.tokenAuth(User);
        authController.verifyToken(token);
        return res.redirect(state + "?token=" + token);
    }
    else {
        return response_1.default.badRequest(res, "Error en la autenticación");
    }
});
loginRouter.get("/facebook/callback", AuthConfig_1.passport.authenticate("facebook", {
    failureRedirect: "/login",
    failureMessage: true,
    session: false,
}), (req, res) => {
    const User = req.user;
    if (User) {
        const token = authController.tokenAuth(User);
        authController.verifyToken(token);
    }
    else {
        return response_1.default.badRequest(res, "Error en la autenticación");
    }
});
