import { Router } from "express";
import {
  getReports,
  createReport,
  updateReport,
  deleteReport,
} from "../controllers/reports.controller";

const router = Router();

router.get("/reports", getReports);
router.post("/reports", createReport);
router.put("/reports", updateReport);
router.delete("/reports", deleteReport);

export default router;
