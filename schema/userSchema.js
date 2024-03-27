import { zod } from "zod";

export const userSchema = zod.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string(),
  skills: z.array(z.string()),
  twitter: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  project: z.array(z.string()),
});
