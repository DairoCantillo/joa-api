import { Router } from "express";
import {
  getReports,
  createReport,
  updateReport,
  deleteReport,
} from "../controllers/reports.controller";

const router = Router();

// Define routes with specific IDs for update and delete operations
router.get("/reports", getReports);
router.post("/reports", createReport);
router.put("/reports/:id", updateReport);
router.delete("/reports/:id", deleteReport);

export default router;
