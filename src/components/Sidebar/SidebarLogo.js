import React from "react";
import { HiChatAlt2 } from "react-icons/hi";

const SidebarLogo = () => {
  return (
    <div className="d-flex align-items-center gap-2 mb-4 ps-3">
      <HiChatAlt2 color="#14BA6D" size={46} />
      <h5 className="mt-3 fw-bold">WhatsAPP API</h5>
    </div>
  );
};

export default SidebarLogo;
