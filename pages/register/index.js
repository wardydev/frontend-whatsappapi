import React, { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import Button from "../../src/components/Button";
import GreetingAuth from "../../src/components/GreetingAuth";
import InputField from "../../src/components/InputField";
import Layout from "../../src/components/Layout";
import usePost from "../../src/hooks/usePost";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const data = {
    name: value.name,
    email: value.email,
    password: value.password,
  };
  const { handlePostData } = usePost("register", data, "/login");

  return (
    <Layout>
      <div style={{ marginTop: -100 }}>
        <GreetingAuth
          title="Yuk, Daftar dulu disini👋"
          icon={<HiChatAlt2 color="#14BA6D" size={46} />}
        />
        <form
          className="card p-3"
          style={{ width: 350 }}
          onSubmit={(e) => handlePostData(e)}
        >
          <div className="mb-1">
            <InputField
              label="Nama"
              type="text"
              placeholder="Tambahkan Nama"
              id="addName"
              isRequired={true}
              name="name"
              value={value.name}
              setValue={(e) => handleInputChange(e)}
            />
          </div>
          <div className="mb-1">
            <InputField
              label="Email"
              type="email"
              placeholder="Tambahkan Email"
              id="exampleInputEmail1"
              isRequired={true}
              name="email"
              value={value.email}
              setValue={(e) => handleInputChange(e)}
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
              setValue={(e) => handleInputChange(e)}
            />
          </div>
          <Button title="Daftar" />
        </form>
      </div>
    </Layout>
  );
};

export default Register;
