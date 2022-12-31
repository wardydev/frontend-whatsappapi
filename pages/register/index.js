import React, { useState } from "react";
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
    <form
      className="container"
      style={{ width: 350 }}
      onSubmit={(e) => handlePostData(e)}
    >
      <div className="mb-3">
        <label htmlFor="masukkanNama" className="form-label">
          Masukkan Nama
        </label>
        <input
          type="text"
          className="form-control"
          id="masukkanNama"
          aria-describedby="name"
          required
          name="name"
          value={value.name}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
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
          onChange={(e) => handleInputChange(e)}
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
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Register;
