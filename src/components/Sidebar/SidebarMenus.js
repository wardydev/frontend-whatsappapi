import Link from "next/link";
import React from "react";

import styles from "./Sidebar.module.css";

const SidebarMenus = ({ title, route, icon, isActive = false }) => {
  return (
    <div className="ps-3">
      <Link
        href={route}
        className={`rounded-start ${
          isActive ? styles.menuContainerActive : styles.menuContainer
        }`}
      >
        {icon}
        <span
          className={`ms-3 fw-medium ${
            isActive ? styles.menuTitleActive : styles.menuTitle
          }`}
        >
          {title}
        </span>
        {isActive && <div className={`ms-auto ${styles.dotActive}`}></div>}
      </Link>
    </div>
  );
};

export default SidebarMenus;
