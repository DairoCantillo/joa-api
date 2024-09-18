import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

export default validate;
