import React, { useContext, useState } from "react";
import Link from "next/link";
import { HiChatAlt2 } from "react-icons/hi";
import OtpInput from "react-otp-input";
import Button from "../../src/components/Button";

import GreetingAuth from "../../src/components/GreetingAuth";
import Layout from "../../src/components/Layout";
import { AuthContext } from "../../src/context/providers/AuthProvider";
import usePost from "../../src/hooks/usePost";

const VerifEmail = () => {
  const { email } = useContext(AuthContext);
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const data = {
    email,
    otp,
  };

  const { handlePostData } = usePost("verify_otp", data, "/register");

  return (
    <Layout>
      <div style={{ marginTop: -100 }}>
        <GreetingAuth
          title={null}
          icon={<HiChatAlt2 color="#14BA6D" size={46} />}
        />
        <form
          className="card p-3"
          style={{ width: 350 }}
          onSubmit={(e) => handlePostData(e)}
        >
          <div className="text-center fw-medium">
            {email === null ? (
              <p className="opacity-75">
                Daftarkan emailmu dulu{" "}
                <Link href="/send-otp">
                  <span style={{ color: "#14BA6D" }}>Disini</span>
                </Link>{" "}
                Untuk dapatkan kode OTP
              </p>
            ) : (
              <p className="opacity-75">
                Silahkan cek email{" "}
                <span style={{ color: "#14BA6D" }}>{email}</span> untuk kode OTP
                yang telah kami kirim.
              </p>
            )}
          </div>
          <div className="mb-3">
            <OtpInput
              numInputs={6}
              inputStyle={{
                width: "100%",
                padding: "0.7rem",
                border: "1px solid #C8C8C8",
                borderRadius: "8px",
                marginRight: 6,
                color: "#14BA6D",
                fontWeight: "bold",
              }}
              isInputNum={true}
              shouldAutoFocus={true}
              value={otp}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button title="Next" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default VerifEmail;
