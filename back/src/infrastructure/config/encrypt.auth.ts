import crypto from "crypto";

const secretKey = process.env.SECRET_KEY_AES;

const algorithm = "aes-256-cbc";

export function encryptData(data: object): {
  iv: string;
  dataCrypt: string;
} {
  const jsonData = JSON.stringify(data);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(secretKey!, "hex"),
    iv
  );

  let encrypted = cipher.update(jsonData, "utf8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv.toString("hex"), dataCrypt: encrypted };
}
