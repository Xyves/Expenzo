import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
});
export const registerSchema = z.object({
  username: z.string(),
  emailAddress: z.string().email(),
  password: z.string().min(6),
});
