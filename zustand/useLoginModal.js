import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLoginModal = create(
  persist(
    (set) => ({
      isLogin: false,
      openLogin: () => set({ isLogin: true }),
      closeLogin: () => set({ isLogin: false }),
    }),
    {
      name: "login-modal",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoginModal;
