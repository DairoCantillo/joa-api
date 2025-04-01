import { z } from 'zod';

class UsersSchemas {
  static readonly createUserSchema = z.object({
    userName: z.string().min(4, 'Username is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    email: z.string().email('Invalid email address'),
  });

  static readonly updateUserSchema = z.object({
    userName: z.string().min(4, 'Username is required'),
    email: z.string().email('Invalid email address'),
  });
}

export default UsersSchemas;
