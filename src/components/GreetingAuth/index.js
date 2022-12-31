import React from "react";

const GreetingAuth = ({ title, icon }) => {
  return (
    <div className="text-center mx-auto" style={{ width: 300 }}>
      {icon}
      <p className="fs-5 opacity-75">{title}</p>
    </div>
  );
};

export default GreetingAuth;
