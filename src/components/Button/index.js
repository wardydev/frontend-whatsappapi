import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, isDisabled = false }) => {
  return (
    <>
      <button
        type="submit"
        className={
          isDisabled
            ? `${styles.btn} rounded bg-secondary`
            : `${styles.btn} rounded`
        }
        disabled={isDisabled}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
