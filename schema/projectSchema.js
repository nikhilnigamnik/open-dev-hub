import { zod } from "zod";

export const projectSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  status: zod.boolean(),
  repoLink: zod.string().url(),
  tags: zod.array(z.string()),
  userId: zod.string(),
});
