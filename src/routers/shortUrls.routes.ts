import { Router } from "express";
import {
  createShortUrl,
  deleteShortUrl,
  getShortUrl,
  getShortUrls,
  updateShortUrl,
} from "../controllers/shortUrls.controller";
const router = Router();

router.get("/shorturls", getShortUrls);
router.post("/shorturls", createShortUrl);
router.put("/shorturls/:id", updateShortUrl);
router.delete("/shorturls/:id", deleteShortUrl);
router.get("/shorturls/:id", getShortUrl);

export default router;
