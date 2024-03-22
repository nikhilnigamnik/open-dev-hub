"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistedStore, store } from "@/redux/store";

const GlobalProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <SessionProvider>{children}</SessionProvider>;
      </PersistGate>
    </Provider>
  );
};

export default GlobalProvider;
