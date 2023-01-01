import React, { useContext } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import GreetingAuth from "../../src/components/GreetingAuth";
import Layout from "../../src/components/Layout";
import Register from "../../src/components/Register";
import SendOtp from "../../src/components/SendOtp";
import VerifEmail from "../../src/components/VerifEmail";
import { AuthContext } from "../../src/context/providers/AuthProvider";
import { STATUS_REGISTER_ACTIVE } from "../../src/utils/constants";

const RegisterBackup = () => {
  const { registerAuthActive } = useContext(AuthContext);

  const showFormActive = () => {
    switch (registerAuthActive) {
      case STATUS_REGISTER_ACTIVE.SEND_OTP:
        return <SendOtp />;
      case STATUS_REGISTER_ACTIVE.VERIF_EMAIL:
        return <VerifEmail />;
      case STATUS_REGISTER_ACTIVE.REGISTER:
        return <Register />;
      default:
        return registerAuthActive;
    }
  };
  return (
    <Layout>
      <div style={{ marginTop: -100 }}>
        <GreetingAuth
          title="Yuk, Daftar dulu disini👋"
          icon={<HiChatAlt2 color="#14BA6D" size={46} />}
        />
        {showFormActive()}
      </div>
    </Layout>
  );
};

export default RegisterBackup;
