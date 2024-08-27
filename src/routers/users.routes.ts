import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/users.controller";

const router = Router();

router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);
router.get("/users/:id", getUser);

export default router;
