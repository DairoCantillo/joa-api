import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  try {
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const user = jwt.verify(token, config.secretKey);
      req.body.user = user;
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
