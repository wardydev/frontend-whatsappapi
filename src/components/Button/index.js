import React from "react";
import styles from "./Button.module.css";

const Button = ({
  title,
  isDisabled = false,
  handleClick,
  isFullWidth = false,
  withIcon,
}) => {
  return (
    <>
      <button
        type="submit"
        className={
          isDisabled
            ? `${styles.btn} rounded bg-secondary ${
                isFullWidth ? "w-100" : "w-auto px-4"
              }`
            : `${styles.btn} rounded ${isFullWidth ? "w-100" : "w-auto px-4"}`
        }
        disabled={isDisabled}
        onClick={handleClick}
      >
        {withIcon ? withIcon : null}
        <span className="ps-2">{title}</span>
      </button>
    </>
  );
};

export default Button;
