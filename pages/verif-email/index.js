import React, { useContext, useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import OtpInput from "react-otp-input";

import GreetingAuth from "../../src/components/GreetingAuth";
import Layout from "../../src/components/Layout";
import { AuthContext } from "../../src/context/providers/AuthProvider";
import usePost from "../../src/hooks/usePost";

const VerifEmail = () => {
  // const [email, setEmail] = useState("");
  const { email, setEmail } = useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const [state, setState] = useState("");

  const data = {
    email,
    otp,
  };
  const { handlePostData } = usePost("verify_otp", data, "/register");

  const handleChange = (state) => {
    setState(state);
  };

  return (
    <Layout>
      <div style={{ marginTop: -100 }}>
        <h1>adsfasdf{state.otp}</h1>
        <GreetingAuth
          title="Hallo, Silahkan ikuti proses registrasi👋"
          icon={<HiChatAlt2 color="#14BA6D" size={46} />}
        />
        <form
          className="card p-3"
          style={{ width: 350 }}
          onSubmit={(e) => handlePostData(e)}
        >
          <div className="text-center fw-medium">
            <p className="opacity-75">
              Silahkan cek email{" "}
              <span style={{ color: "#14BA6D" }}>sdf@gmail.com</span> untuk kode
              OTP yang telah kami kirim.
            </p>
          </div>
          <div className="mb-3">
            <OtpInput
              numInputs={6}
              // containerStyle={{ backgroundColor: "red" }}
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
              value={state}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Masukkan Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              Masukkan OTP
            </label>
            <input
              type="text"
              className="form-control"
              id="otp"
              aria-describedby="otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default VerifEmail;
