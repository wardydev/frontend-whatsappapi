import React from "react";
import AuthProvider from "./providers/AuthProvider";

const ContextProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProvider;
