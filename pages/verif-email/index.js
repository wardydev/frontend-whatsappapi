import React, { useState } from "react";
import usePost from "../../src/hooks/usePost";

const VerifEmail = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const data = {
    email,
    otp,
  };
  const { handlePostData } = usePost("verify_otp", data, "/register");

  return (
    <form
      className="container"
      style={{ width: 350 }}
      onSubmit={(e) => handlePostData(e)}
    >
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
  );
};

export default VerifEmail;
