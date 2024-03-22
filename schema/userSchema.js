import { zod } from "zod";

export const userSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  image: zod.string(),
  skills: z.array(z.string()),
  twitter: zod.string().optional(),
  github: zod.string().optional(),
  linkedin: zod.string().optional(),
  portfolio: zod.string().optional(),
  project: zod.array(z.string()),
});
