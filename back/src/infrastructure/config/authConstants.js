"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookConfig = exports.googleConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const constants_1 = require("../../common/constants/constants");
dotenv_1.default.config();
exports.googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: constants_1.CALLGOOGLE,
    scope: constants_1.GOOGLE_SCOPE,
};
exports.facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: constants_1.CALLFACEBOOK,
    profileFields: constants_1.PROFILEFIELDS,
};
