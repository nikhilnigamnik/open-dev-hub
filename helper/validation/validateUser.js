import { userSchema } from "@/schema/userSchema";

export const validateUser = (data) => {
  try {
    userSchema.parse(data);
    return true;
  } catch (error) {
    console.error("User data validation error:", error.errors);
    return false;
  }
};
