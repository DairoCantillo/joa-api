import { z } from "zod";

class AuthSchemas {
  static loginSchema = z.object({
    userName: z.string().min(4, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  static registerSchema = z.object({
    userName: z.string().min(4, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.string().email("Invalid email address"),
  });
}

export default AuthSchemas;
