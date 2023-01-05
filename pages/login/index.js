import React, { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import Alert from "../../src/components/Alert";
import Button from "../../src/components/Button";
import GreetingAuth from "../../src/components/GreetingAuth";
import InputField from "../../src/components/InputField";
import Layout from "../../src/components/Layout";
import Spinner from "../../src/components/Spinner";
import usePost from "../../src/hooks/usePost";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleInputchange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const data = {
    email: value.email,
    password: value.password,
  };
  const { handlePostData, isLoading, errorMessage } = usePost(
    "login",
    data,
    "",
    false,
    true,
    true,
    "TOKEN"
  );
  return (
    <Layout>
      <div style={{ marginTop: -100 }}>
        <h1></h1>
        <GreetingAuth
          title="Yuk, Daftar dulu disini👋"
          icon={<HiChatAlt2 color="#14BA6D" size={46} />}
        />
        {errorMessage !== "" && <Alert message={errorMessage} />}
        <form
          className="container"
          style={{ width: 350 }}
          onSubmit={(e) => handlePostData(e)}
        >
          <div className="mb-1">
            <InputField
              label="Email"
              type="email"
              placeholder="Tambahkan Email"
              id="exampleInputEmail1"
              isRequired={true}
              name="email"
              value={value.email}
              setValue={(e) => handleInputchange(e)}
            />
          </div>
          <div className="mb-3">
            <InputField
              label="Password"
              type="password"
              placeholder="Tambahkan Password"
              id="password"
              isRequired={true}
              name="password"
              value={value.password}
              setValue={(e) => handleInputchange(e)}
            />
          </div>
          <Button
            title={isLoading ? <Spinner /> : "Login"}
            isDisabled={isLoading}
            isFullWidth={true}
          />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
