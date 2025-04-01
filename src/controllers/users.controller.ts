import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prismaClient from '../models/prismaClient';
import config from '../config';
import logger from '../utils/logger';

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await prismaClient.user.update({
      where: { id: req.body.user.id },
      data: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateUserPassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, config.bcryptSaltRounds);
    const updatedUser = await prismaClient.user.update({
      where: { id: req.body.user.id },
      data: {
        password: hashedPassword,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userDeleted = await prismaClient.user.delete({
      where: { id: req.body.user.id },
    });
    if (userDeleted) {
      const { ...userWithoutPassword } = userDeleted;
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: { id: req.body.user.id },
    });
    if (user) {
      const { ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal Server Error');
  }
};
