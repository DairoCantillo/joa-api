import { Request, Response } from "express";
import prismaClient from "../models/prismaClient";

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await prismaClient.user.create({
      data: req.body,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await prismaClient.user.update({
      where: { id: req.body.id },
      data: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await prismaClient.user.delete({
      where: { id: req.body.id },
    });
    res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(404).send("Not found");
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: { id: req.params.id },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
