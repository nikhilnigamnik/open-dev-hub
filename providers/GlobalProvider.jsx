"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const GlobalProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default GlobalProvider;
