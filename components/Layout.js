"use client";
import React, { useContext } from 'react';
import styles from './Layout.module.css';
import TitleBar from './TitleBar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { SidebarContext } from './SidebarContext';

const Layout = ({ children }) => {
  const { isLeftSidebarVisible, isRightSidebarVisible } = useContext(SidebarContext);

  return (
    <div className={styles.container}>
      <TitleBar />
      <div className={styles.main}>
        {isLeftSidebarVisible && <LeftSidebar />}
        <div className={styles.content}>
          {children}
        </div>
        {isRightSidebarVisible && <RightSidebar />}
      </div>
    </div>
  );
};

export default Layout;