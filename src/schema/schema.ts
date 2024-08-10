import { z, ZodType } from "zod";
import { FormData } from "../types/form-types";

export const FormSchema: ZodType<FormData> = z.object({
  name: z.object({
    firstName: z
      .string()
      .min(3, { message: "First name is too short" })
      .max(20, { message: "First name is too long" }),
    lastName: z
      .string()
      .min(3, { message: "Last Name is too short" })
      .max(20, { message: "Last Name is too long" }),
  }),
  password: z
    .object({
      password: z
        .string()
        .min(8, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
  email: z.object({
    email: z.string().email({ message: "Invalid email address" }),
  }),
});