import { Request, Response } from "express";
import prismaClient from "../models/prismaClient";

export const getShortUrls = async (_req: Request, res: Response) => {
  try {
    const shortUrls = await prismaClient.shortUrl.findMany();
    res.status(200).json(shortUrls);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const newShortUrl = await prismaClient.shortUrl.create({
      data: req.body,
    });
    res.status(201).json(newShortUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateShortUrl = async (req: Request, res: Response) => {
  try {
    const updatedShortUrl = await prismaClient.shortUrl.update({
      where: { id: req.body.id },
      data: req.body,
    });
    res.status(200).json(updatedShortUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteShortUrl = async (req: Request, res: Response) => {
  try {
    const deletedShortUrl = await prismaClient.shortUrl.delete({
      where: { id: req.body.id },
    });
    res.status(200).json(deletedShortUrl);
  } catch (error) {
    console.error(error);
    res.status(404).send("Not found");
  }
};

export const getShortUrl = async (req: Request, res: Response) => {
  try {
    const shortUrl = await prismaClient.shortUrl.findUnique({
      where: { id: req.params.id },
    });
    res.status(200).json(shortUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
