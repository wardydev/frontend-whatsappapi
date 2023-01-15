import React from "react";
import AuthProvider from "./providers/AuthProvider";
import AutoReplyProvider from "./providers/AutoReplyProvider";
import DeviceProvider from "./providers/DeviceProvider";
import DocsProvider from "./providers/DocsProvider";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DeviceProvider>
        <DocsProvider>
          <AutoReplyProvider>{children}</AutoReplyProvider>
        </DocsProvider>
      </DeviceProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
