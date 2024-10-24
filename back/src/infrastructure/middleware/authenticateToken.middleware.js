"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_1 = __importDefault(require("../config/response"));
const deencrypt_auth_1 = require("../config/deencrypt.auth");
const secretKey = process.env.SECRET_KEY_AES;
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return response_1.default.unauthorized(res, "Usted no esta autorizado");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(authHeader, secretKey);
        const decryptedData = (0, deencrypt_auth_1.decryptData)(decoded.iv, decoded.data);
        req.user = decryptedData;
        next();
    }
    catch (error) {
        return response_1.default.forbidden(res, "Token inválido o expirado");
    }
};
exports.authenticateToken = authenticateToken;
