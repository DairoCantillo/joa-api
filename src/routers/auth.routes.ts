import { Router } from "express";

import { register, login } from "../controllers/auth.controller";
import validate from "../middlewares/validate.middelware";
import AuthSchemas from "../schemas/auth.schemas";
const router = Router();

router.post("/register", validate(AuthSchemas.registerSchema), register);
router.post("/login", validate(AuthSchemas.loginSchema), login);

export default router;
