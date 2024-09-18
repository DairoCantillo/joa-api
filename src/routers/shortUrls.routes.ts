import { Router } from "express";
import {
  createShortUrl,
  deleteShortUrl,
  getShortUrl,
  getShortUrls,
  updateShortUrl,
} from "../controllers/shortUrls.controller";
import validate from "../middlewares/validate.middelware";
import ShortUrlsSchemas from "../schemas/shortUrls.schemas";
const router = Router();

router.get("/shorturls", getShortUrls);
router.post(
  "/shorturls",
  validate(ShortUrlsSchemas.createShortUrlSchema),
  createShortUrl
);
router.put("/shorturls/:id", updateShortUrl);
router.delete("/shorturls/:id", deleteShortUrl);
router.get("/shorturls/:id", getShortUrl);

export default router;
