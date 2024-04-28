import { auth } from "@/auth";

export async function getUser() {
  const session = auth();

  if (!session) {
    return null;
  }

  return session;
}
