import { Request, Response } from "express";
import prismaClient from "../models/prismaClient";

export const getVisits = async (_req: Request, res: Response) => {
  try {
    const visits = await prismaClient.visit.findMany();
    res.status(200).json(visits);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const createVisit = async (req: Request, res: Response) => {
  try {
    const newVisit = await prismaClient.visit.create({
      data: req.body,
    });
    res.status(201).json(newVisit);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updateVisit = async (req: Request, res: Response) => {
  try {
    const updatedVisit = await prismaClient.visit.update({
      where: { id: req.body.id },
      data: req.body,
    });
    res.status(200).json(updatedVisit);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteVisit = async (req: Request, res: Response) => {
  try {
    const deletedVisit = await prismaClient.visit.delete({
      where: { id: req.body.id },
    });
    res.status(200).json(deletedVisit);
  } catch (error) {
    console.error(error);
    res.status(404).send("Not found");
  }
};

export const getVisit = async (req: Request, res: Response) => {
  try {
    const visit = await prismaClient.visit.findUnique({
      where: { id: req.params.id },
    });
    res.status(200).json(visit);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
