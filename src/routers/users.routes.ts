import { Router, RequestHandler } from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/users.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

router.put("/users", authenticateJWT as RequestHandler, updateUser);
router.delete("/users", authenticateJWT as RequestHandler, deleteUser);
router.get("/users", authenticateJWT as RequestHandler, getUser);

export default router;
