import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useProjectModal = create(
  persist(
    (set) => ({
      isProject: false,
      openProject: () => set({ isProject: true }),
      closeProject: () => set({ isProject: false }),
    }),
    {
      name: "project-modal",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProjectModal;
