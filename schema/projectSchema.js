import { z } from "zod";

function validateGitHubRepo(value) {
  const gitHubRepoRegex =
    /^(https:\/\/)?(www\.)?github\.com\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)\/?$/;
  return gitHubRepoRegex.test(value) ? null : "Invalid GitHub repository URL";
}

export const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  status: z.boolean().optional(),
  repoLink: z.string().refine(validateGitHubRepo, {
    message: "Invalid GitHub repository URL",
  }),
  projectLink: z.string().url({ message: "Project link must be a valid URL" }),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
  userId: z.string(),
});
