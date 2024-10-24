"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deencrypt_auth_1 = require("../../infrastructure/config/deencrypt.auth");
const encrypt_auth_1 = require("../../infrastructure/config/encrypt.auth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.SECRET_KEY_AES;
class AuthController {
    tokenAuth(user) {
        if (!secretKey || secretKey.length !== 64) {
            throw new Error("La clave secreta debe tener 32 bytes (256 bits).");
        }
        const timestamp = Date.now();
        const expiresIn = user.role === "USER" ? "1y" : "6h";
        const { iv, dataCrypt } = (0, encrypt_auth_1.encryptData)({
            id: user.id,
            role: user.role,
            timestamp,
        });
        const payload = { data: dataCrypt, iv };
        const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn });
        return token;
    }
    verifyToken(token) {
        if (!secretKey || secretKey.length !== 64) {
            throw new Error("La clave secreta debe tener 32 bytes (256 bits).");
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, secretKey);
            const decryptedData = (0, deencrypt_auth_1.decryptData)(decoded.iv, decoded.data);
            return decryptedData;
        }
        catch (error) {
            throw new Error("Token inválido o expirado.");
        }
    }
}
exports.default = AuthController;
