import React from "react";
import Image from "next/image";
import Link from "next/link";

const SidebarLogo = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 ps-3">
      <Link href="/">
        <Image
          src="./wazoid-logo.svg"
          alt="wazoid-logo"
          width={300}
          height={100}
        />
      </Link>
    </div>
  );
};

export default SidebarLogo;
