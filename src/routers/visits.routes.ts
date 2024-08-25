import { Router } from "express";
import {
  createVisit,
  deleteVisit,
  getVisit,
  getVisits,
  updateVisit,
} from "../controllers/visits.controller";

const router = Router();

router.get("/visits", getVisits);
router.post("/visits", createVisit);
router.put("/visits", updateVisit);
router.delete("/visits", deleteVisit);
router.get("/visits/:id", getVisit);

export default router;
