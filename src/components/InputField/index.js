import React from "react";
import styles from "./InputField.module.css";

const InputField = ({
  label,
  type,
  placeholder,
  id,
  isRequired = false,
  name,
  value,
  setValue,
}) => {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={id} className="form-label fw-medium">
        {label}
      </label>
      <input
        type={type}
        className={`${styles.input} rounded`}
        placeholder={placeholder}
        id={id}
        aria-describedby={id}
        required={isRequired}
        name={name}
        value={value}
        onChange={setValue}
        autoComplete="true"
      />
    </div>
  );
};

export default InputField;
