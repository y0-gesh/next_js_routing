"use client";
import React, { useContext } from "react";
import styles from "./TitleBar.module.css";
import { SidebarContext } from "./SidebarContext";

const TitleBar = () => {
  const { toggleLeftSidebar, toggleRightSidebar } = useContext(SidebarContext);

  return (
    <div className={styles.titleBar}>
      <h1>Next Js Routing</h1>
      <div className="control-btn">
        <button onClick={toggleLeftSidebar}>Left</button>
        <button onClick={toggleRightSidebar}>Right</button>
      </div>
    </div>
  );
};

export default TitleBar;
