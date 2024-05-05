import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isAddProjectOpen, setAddProjectOpen] = useState(false);

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

  const openAddProjectModal = () => setAddProjectOpen(true);
  const closeAddProjectModal = () => setAddProjectOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        openLoginModal,
        closeLoginModal,
        isAddProjectOpen,
        openAddProjectModal,
        closeAddProjectModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
