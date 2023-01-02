import React from "react";
import styles from "./LayoutDashboard.module.css";

import Sidebar from "../Sidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="bg-primary">
      <Sidebar />
      <div className={`row ${styles.content}`}>
        <div className="col-8 ps-4">{children}</div>
        <div className="col-4 bg-primary">column 3</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
