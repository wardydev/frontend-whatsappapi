import React from "react";

const SwitchInput = ({ isDisable = true, setValue }) => {
  return (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        disabled={isDisable}
        onChange={setValue}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Chatbot
      </label>
    </div>
  );
};

export default SwitchInput;
