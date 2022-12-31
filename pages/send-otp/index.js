import React, { useState } from "react";
import usePost from "../../src/hooks/usePost";

const SendOtp = () => {
  const [email, setEmail] = useState("");
  const data = {
    email,
  };
  const { handlePostData } = usePost("send_otp", data, "/verif-email");
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SendOtp;
