import React, { useState } from "react";
import { STATUS_REGISTER_ACTIVE } from "../../utils/constants";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [registerAuthActive, setRegisterAuthActive] = useState(
    STATUS_REGISTER_ACTIVE.SEND_OTP
  );

  return (
    <AuthContext.Provider
      value={{ email, setEmail, registerAuthActive, setRegisterAuthActive }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
