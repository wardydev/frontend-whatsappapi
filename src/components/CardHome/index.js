import Image from "next/image";
import React from "react";

const CardHome = ({ title, value, img }) => {
  return (
    <div className="card-body position-relative d-flex align-items-center">
      <div
        className="mt-3 position-absolute"
        style={{ top: -80, left: 24, transform: "scaleX(-1)" }}
      >
        <Image src={img} width={200} height={200} />
      </div>
      <div className="ms-auto" style={{ marginRight: 140 }}>
        <span className="opacity-75">{title}</span>
        <h3 className="text-success fw-bold">{value}</h3>
      </div>
    </div>
  );
};

export default CardHome;
