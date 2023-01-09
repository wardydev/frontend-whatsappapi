import React from "react";
import AuthProvider from "./providers/AuthProvider";
import DeviceProvider from "./providers/DeviceProvider";
import DocsProvider from "./providers/DocsProvider";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DeviceProvider>
        <DocsProvider>{children}</DocsProvider>
      </DeviceProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
