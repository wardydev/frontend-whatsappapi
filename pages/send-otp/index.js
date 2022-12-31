import React, { useContext, useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";

import usePost from "../../src/hooks/usePost";
import { AuthContext } from "../../src/context/providers/AuthProvider";
import Button from "../../src/components/Button";
import Layout from "../../src/components/Layout";
import InputField from "../../src/components/InputField";
import GreetingAuth from "../../src/components/GreetingAuth";

const SendOtp = () => {
  const { email, setEmail } = useContext(AuthContext);

  const data = {
    email,
  };
  const { handlePostData } = usePost("send_otp", data, "/verif-email");
  return (
    <Layout>
      <div style={{ marginTop: -100 }}>
        <GreetingAuth
          title="Hallo, Silahkan ikuti proses registrasi👋"
          icon={<HiChatAlt2 color="#14BA6D" size={46} />}
        />
        <form
          className="card p-3"
          style={{ width: 350 }}
          onSubmit={(e) => handlePostData(e)}
        >
          <div className="mb-3">
            <InputField
              label="Email"
              type="email"
              placeholder="Tambahkan Email"
              id="exampleInputEmail1"
              isRequired={true}
              name="email"
              value={email}
              setValue={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button title="Next" />
        </form>
      </div>
    </Layout>
  );
};

export default SendOtp;
