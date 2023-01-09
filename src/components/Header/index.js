import React from "react";
import { BiBell, BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <div className="py-3 d-flex justify-content-end pe-5 border-bottom">
      <div className="d-flex align-items-center">
        <BiBell size={24} color="#14BA6D" />
        <div className="bg-secondary text-white p-2 rounded-circle ms-3">
          <BiUser size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
