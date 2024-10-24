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
exports.FacebookFactory = FacebookFactory;
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = require("passport-facebook");
const auth_helpers_1 = require("./auth.helpers");
const userService_1 = __importDefault(require("../../modules/users/service/userService"));
const userController_1 = __importDefault(require("../../modules/users/controller/userController"));
const authConstants_1 = require("../config/authConstants");
function FacebookFactory() {
    const { clientID, clientSecret, callbackURL, profileFields } = authConstants_1.facebookConfig;
    if (!clientID || !clientSecret) {
        throw new Error("No se tiene el Client ID o Secret de Facebook");
    }
    const userService = new userService_1.default();
    const userController = new userController_1.default(userService);
    passport_1.default.use(new passport_facebook_1.Strategy({
        clientID,
        clientSecret,
        callbackURL,
        profileFields,
    }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
        console.log(profile);
        try {
            const userDTO = (0, auth_helpers_1.verification)(profile);
            console.log("devuelve la verificacion :", userDTO);
            yield userController.createUser(userDTO, done);
        }
        catch (error) {
            console.error("Error al autenticar el usuario:", error);
            done(error);
        }
    })));
}
