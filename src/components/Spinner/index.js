import React from "react";

const Spinner = ({ color = "text-light" }) => {
  return (
    <div className={`spinner-border ${color}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
