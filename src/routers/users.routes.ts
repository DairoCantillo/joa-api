import { Router, RequestHandler } from 'express';
import { deleteUser, updateUser } from '../controllers/users.controller';
import { authenticateJWT } from '../middlewares/auth.middleware';
import validate from '../middlewares/validate.middelware';
import UsersSchemas from '../schemas/users.schemas';

const router = Router();

router.put(
  '/users',
  authenticateJWT as RequestHandler,
  validate(UsersSchemas.updateUserSchema),
  updateUser,
);
router.delete('/users', authenticateJWT as RequestHandler, deleteUser);

export default router;
