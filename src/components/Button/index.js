import React from "react";
import styles from "./Button.module.css";

const Button = ({ title }) => {
  return (
    <>
      <button type="submit" className={`${styles.btn} rounded`}>
        {title}
      </button>
    </>
  );
};

export default Button;
