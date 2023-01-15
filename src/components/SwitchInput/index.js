import React from "react";

const SwitchInput = ({
  isDisable = true,
  setValue,
  isTitle = false,
  title,
  defaultValue = false,
  checked,
}) => {
  return (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        disabled={isDisable}
        onChange={setValue}
        defaultChecked={defaultValue}
        checked={checked}
      />
      {isTitle && (
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {title}
        </label>
      )}
    </div>
  );
};

export default SwitchInput;
