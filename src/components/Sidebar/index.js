import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "./Sidebar.module.css";
import SidebarFooter from "./SidebarFooter";
import SidebarLogo from "./SidebarLogo";
import SidebarMenus from "./SidebarMenus";
import { MENUS, STATUS_DOCS } from "../../utils/constants";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div
      className={`d-flex flex-column justify-content-between pb-4 pt-2 ${styles.container}`}
    >
      <div>
        <SidebarLogo />
        {MENUS.map((menu, index) => {
          return (
            <div key={index}>
              <SidebarMenus
                title={menu.title}
                icon={
                  menu.route === router.pathname ? menu.iconActive : menu.icon
                }
                route={menu.route}
                isActive={menu.route === router.pathname}
                menuChild={menu.menuChild}
              />
            </div>
          );
        })}
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
