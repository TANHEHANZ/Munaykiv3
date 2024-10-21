import crypto from "crypto";

const secretKey = process.env.SECRET_KEY_AES;
const algorithm = "aes-256-cbc";

export function decryptData(iv: string, encryptedData: string): object {

  const ivBuffer = Buffer.from(iv, "hex");
  const keyBuffer = Buffer.from(secretKey!, "hex");


  const decipher = crypto.createDecipheriv(algorithm, keyBuffer, ivBuffer);

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return JSON.parse(decrypted);
}
