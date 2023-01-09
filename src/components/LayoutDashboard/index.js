import React from "react";
import styles from "./LayoutDashboard.module.css";

import Sidebar from "../Sidebar";
import Header from "../Header";

const LayoutDashboard = ({ children, isTripleColumn = false, thirdColumn }) => {
  return (
    <div className="bg-primary">
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className="row position-relative">
          <div
            className={isTripleColumn ? "col-8 px-5 pt-4" : "col-12 px-5 pt-4"}
          >
            {children}
          </div>
          {isTripleColumn && (
            <div
              className={`col-4 bg-white ${styles.thirdColumn}`}
              style={{ minHeight: "90vh" }}
            >
              {thirdColumn}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
