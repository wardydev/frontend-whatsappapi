import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, isDisabled = false, handleClick }) => {
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
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
