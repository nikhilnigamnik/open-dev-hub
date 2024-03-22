import { projectSchema } from "@/schema/projectSchema";

export const validateProject = (data) => {
  try {
    projectSchema.parse(data);
    return true;
  } catch (error) {
    console.error("Project data validation error:", error.errors);
    return false;
  }
};
