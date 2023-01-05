import React from "react";
import AuthProvider from "./providers/AuthProvider";
import DeviceProvider from "./providers/DeviceProvider";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DeviceProvider>{children}</DeviceProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
