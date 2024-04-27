import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      isUserActive: () => !!user,
      user: null,
      setUser: (user) =>
        set({
          user,
          isUserActive: true,
        }),
      logout: () => set({ user: null, isUserActive: false }),
    }),
    {
      name: "user-auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
