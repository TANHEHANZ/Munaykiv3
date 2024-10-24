"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = decryptData;
const crypto_1 = __importDefault(require("crypto"));
const secretKey = process.env.SECRET_KEY_AES;
const algorithm = "aes-256-cbc";
function decryptData(iv, encryptedData) {
    const ivBuffer = Buffer.from(iv, "hex");
    const keyBuffer = Buffer.from(secretKey, "hex");
    const decipher = crypto_1.default.createDecipheriv(algorithm, keyBuffer, ivBuffer);
    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return JSON.parse(decrypted);
}
