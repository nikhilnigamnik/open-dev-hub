"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "@/redux/store";

const GlobalProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </Provider>
  );
};

export default GlobalProvider;
