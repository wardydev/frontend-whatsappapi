import React from "react";
import styles from "./LayoutDashboard.module.css";

import Sidebar from "../Sidebar";
import Header from "../Header";

const LayoutDashboard = ({ children, isTripleColumn = false }) => {
  return (
    <div className="bg-primary">
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={`row`}>
          <div
            className={isTripleColumn ? "col-8 ps-5 pt-4" : "col-12 ps-5 pt-4"}
          >
            {children}
          </div>
          {isTripleColumn && (
            <div className="col-4 bg-white" style={{ minHeight: "90vh" }}>
              column 3
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
