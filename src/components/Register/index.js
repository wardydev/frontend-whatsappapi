import React, { useState } from "react";
import usePost from "../../hooks/usePost";
import { STATUS_REGISTER_ACTIVE } from "../../utils/constants";
import Alert from "../Alert";
import Button from "../Button";
import InputField from "../InputField";
import Spinner from "../Spinner";

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

  const { handlePostData, isLoading, errorMessage } = usePost(
    "register",
    data,
    STATUS_REGISTER_ACTIVE.REGISTER,
    true
  );

  return (
    <div>
      {errorMessage !== "" && <Alert message={errorMessage} />}
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
        <Button
          title={isLoading ? <Spinner /> : "Daftar"}
          isDisabled={isLoading}
          isFullWidth={true}
        />
      </form>
    </div>
  );
};

export default Register;
