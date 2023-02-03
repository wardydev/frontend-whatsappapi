import React from "react";

const Alert = ({ message, theme = "alert-danger" }) => {
  return (
    <div className={`alert ${theme} my-3`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
