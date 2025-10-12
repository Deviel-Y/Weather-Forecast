import z from "zod";

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
 name: z
  .string("Name is required")
  .min(1, "Name is required")
  .max(100, "Name must be at most 100 characters long"),
});
