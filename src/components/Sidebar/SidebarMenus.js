import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { DocsContext } from "../../context/providers/DocsProvider";

const SidebarMenus = ({ title, route, icon, isActive = false, menuChild }) => {
  const { docsContext, setDocsContext } = useContext(DocsContext);
  const router = useRouter();
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
      {menuChild !== null &&
        menuChild.map((item, index) => {
          return (
            <div
              key={index}
              className="py-1 mt-1 position-relative"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(item.route);
                setDocsContext(item.status);
              }}
            >
              <span
                className={`ps-5 text-dark text-decoration-none ${
                  item.status === docsContext && router.pathname === item.route
                    ? styles.menuChildActive
                    : styles.menuChild
                }`}
              >
                <span className="fw-medium">{item.title}</span>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default SidebarMenus;
