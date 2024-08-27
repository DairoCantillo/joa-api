import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import prismaClient from "../models/prismaClient";
import bcrypt from "bcrypt";
import config from "../config";

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  try {
    const user = await prismaClient.user.findUnique({ where: { userName } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { username: user.userName, id: user.id, email: user.email },
      config.secretKey,
      { expiresIn: "30 minutes" }
    );

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password, userName } = req.body;

  const user = await prismaClient.user.findUnique({ where: { userName } });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
        userName,
      },
    });
    const { password: _, ...userWithoutPassword } = newUser;
    return res.json(userWithoutPassword);
  }
};
