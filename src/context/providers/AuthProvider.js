import React, { useState } from "react";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
