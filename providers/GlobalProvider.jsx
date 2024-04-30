"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "./modal-provider";

const GlobalProvider = ({ children }) => {
  return (
    <SessionProvider>
      <ModalProvider>{children}</ModalProvider>
    </SessionProvider>
  );
};

export default GlobalProvider;
