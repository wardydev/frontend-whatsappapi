import React from "react";
import { BiBell } from "react-icons/bi";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-3 d-flex justify-content-end pe-5 border-bottom">
      <div>
        <BiBell size={24} color="#14BA6D" />
        <Image
          src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_960_720.jpg"
          alt="user-profile"
          width={35}
          height={35}
          className="rounded-circle ms-3"
        />
      </div>
    </div>
  );
};

export default Header;
