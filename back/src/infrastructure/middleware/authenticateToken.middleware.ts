import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import ApiResponse from "../config/response";
import { decryptData } from "../config/deencrypt.auth";

const secretKey = process.env.SECRET_KEY_AES;

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return ApiResponse.unauthorized(res, "Usted no esta autorizado");
  }

  try {
    const decoded = jwt.verify(authHeader, secretKey!) as {
      data: string;
      iv: string;
    };
    const decryptedData = decryptData(decoded.iv, decoded.data);

    req.user = decryptedData;

    next();
  } catch (error) {
    return ApiResponse.forbidden(res, "Token inválido o expirado");
  }
};
