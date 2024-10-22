import { decryptData } from "../../infrastructure/config/deencrypt.auth";
import { encryptData } from "../../infrastructure/config/encrypt.auth";
import jwt from "jsonwebtoken";
const secretKey = process.env.SECRET_KEY_AES;

class AuthController {
  tokenAuth(user: any) {
    if (!secretKey || secretKey.length !== 64) {
      throw new Error("La clave secreta debe tener 32 bytes (256 bits).");
    }

    const timestamp = Date.now();
    const expiresIn = user.role === "USER" ? "1y" : "6h";

    const { iv, dataCrypt } = encryptData({
      id: user.id,
      role: user.role,
      timestamp,
    });
    const payload = { data: dataCrypt, iv };
    const token = jwt.sign(payload, secretKey, { expiresIn });

    return token;
  }

  verifyToken(token: string) {
    if (!secretKey || secretKey.length !== 64) {
      throw new Error("La clave secreta debe tener 32 bytes (256 bits).");
    }

    try {
      const decoded = jwt.verify(token, secretKey) as { data: string; iv: string };
      const decryptedData = decryptData(decoded.iv, decoded.data);
      return decryptedData;
    } catch (error) {
      throw new Error("Token inválido o expirado.");
    }
  }

}

export default AuthController;
