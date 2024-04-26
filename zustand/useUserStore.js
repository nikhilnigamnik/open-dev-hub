import { create } from "zustand";
import { persist } from "zustand/middleware";

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
      name: "user_storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
