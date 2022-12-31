import React, { useState } from "react";
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
  const { handlePostData } = usePost("login", data, "/", true, "TOKEN");
  return (
    <form
      className="container"
      style={{ width: 350 }}
      onSubmit={(e) => handlePostData(e)}
    >
      <div className="mb-3">
        <label htmlFor="masukkanEmail" className="form-label">
          Masukkan Email
        </label>
        <input
          type="email"
          className="form-control"
          id="masukkanEmail"
          aria-describedby="emailHelp"
          required
          name="email"
          value={value.email}
          onChange={(e) => handleInputchange(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="masukkanPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="masukkanPassword"
          aria-describedby="password"
          required
          name="password"
          value={value.password}
          onChange={(e) => handleInputchange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
