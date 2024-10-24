"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = exports.passport = void 0;
const passport_1 = __importDefault(require("passport"));
exports.passport = passport_1.default;
const Factory_Google_1 = require("../factories/Factory.Google");
const Factory_Facebook_1 = require("../factories/Factory.Facebook");
function AuthConfig() {
    const login = function (type) {
        switch (type) {
            case "google": {
                (0, Factory_Google_1.GoogleFactory)();
                break;
            }
            case "facebook": {
                (0, Factory_Facebook_1.FacebookFactory)();
                break;
            }
            default: {
                throw new Error("No se escogió ningún método de inicio de sesión válido");
            }
        }
    };
    return { login };
}
const authConfig = AuthConfig();
exports.authConfig = authConfig;
