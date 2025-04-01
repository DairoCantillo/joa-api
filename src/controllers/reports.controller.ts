import { Request, Response } from 'express';
import prismaClient from '../models/prismaClient';

export const getReports = async (_req: Request, res: Response) => {
  try {
    const reports = await prismaClient.report.findMany();
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
export const getReport = async (req: Request, res: Response) => {
  try {
    const report = await prismaClient.report.findUnique({
      where: { id: req.params.id },
    });
    if (!report) {
      res.status(404).send('Report not found');
    }
    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const createReport = async (req: Request, res: Response) => {
  try {
    const newReport = await prismaClient.report.create({
      data: req.body,
    });
    res.status(201).json(newReport);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const updateReport = async (req: Request, res: Response) => {
  try {
    const updatedReport = await prismaClient.report.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json(updatedReport);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    const deletedReport = await prismaClient.report.delete({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedReport);
  } catch (error) {
    console.error(error);
    res.status(404).send('Not found');
  }
};
