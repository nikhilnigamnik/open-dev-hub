import { useSession } from "next-auth/react";
import { useMemo } from "react";

export function useIsUserAuthenticated() {
  const { status } = useSession();
  return useMemo(() => status === "authenticated", [status]);
}
