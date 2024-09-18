import { z } from "zod";

class ReportsSchemas {
  static createReportSchema = z.object({
    title: z.string().min(4, "Title is required"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long"),
    userId: z.string().uuid("Invalid user ID"),
  });

  static updateReportSchema = z.object({
    title: z.string().min(4, "Title is required"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long"),
  });
}

export default ReportsSchemas;
