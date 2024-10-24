"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptData = encryptData;
const crypto_1 = __importDefault(require("crypto"));
const secretKey = process.env.SECRET_KEY_AES;
const algorithm = "aes-256-cbc";
function encryptData(data) {
    const jsonData = JSON.stringify(data);
    const iv = crypto_1.default.randomBytes(16);
    const cipher = crypto_1.default.createCipheriv(algorithm, Buffer.from(secretKey, "hex"), iv);
    let encrypted = cipher.update(jsonData, "utf8", "hex");
    encrypted += cipher.final("hex");
    return { iv: iv.toString("hex"), dataCrypt: encrypted };
}
