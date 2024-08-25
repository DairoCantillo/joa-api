import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);
router.get("/users/:id", getUser);

export default router;
