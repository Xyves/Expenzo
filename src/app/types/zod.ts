import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
});
export const registerSchema = z
  .object({
    username: z.string().min(4, "Username must contain at least 4 characters"),
    emailAddress: z.email("Enter a valid email address"),
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(20, "Password must contain less than 20 characters"),
    passwordConfirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });
