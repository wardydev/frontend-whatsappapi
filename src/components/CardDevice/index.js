import React from "react";
import styles from "./CardDevice.module.css";

const CardDevice = ({ count, title, imageSrc }) => {
  return (
    <div className="bg-white py-3 px-5 mt-5">
      <div className="d-flex align-items-center position-relative">
        <div className="ms-5 ps-4 text-center">
          <h4 className={styles.count}>{count}</h4>
          <p className={styles.title}>{title}</p>
        </div>
        <img
          src={imageSrc}
          className={styles.imgIllustration}
          alt="image_card_device"
        />
      </div>
    </div>
  );
};

export default CardDevice;
