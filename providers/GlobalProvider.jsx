"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistedStore, store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalProvider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <SessionProvider>{children}</SessionProvider>;
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
