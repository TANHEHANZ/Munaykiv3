"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleFactory = GoogleFactory;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const authConstants_1 = require("../config/authConstants");
const auth_helpers_1 = require("./auth.helpers");
const userController_1 = __importDefault(require("../../modules/users/controller/userController"));
const userService_1 = __importDefault(require("../../modules/users/service/userService"));
function GoogleFactory() {
    const { clientID, clientSecret, callbackURL, scope } = authConstants_1.googleConfig;
    if (!clientID || !clientSecret) {
        throw new Error("No se tiene el Client ID o Secret");
    }
    const userService = new userService_1.default();
    const userController = new userController_1.default(userService);
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID,
        clientSecret,
        callbackURL,
        scope,
    }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
        try {
            const user = (0, auth_helpers_1.verification)(profile);
            yield userController.createUser(user, done);
        }
        catch (error) {
            console.error("Error al autenticar el usuario:", error);
            done(error);
        }
    })));
}
