import React from 'react';
import styles from './Layout.module.css';
import TitleBar from './TitleBar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <TitleBar />
      <div className={styles.main}>
        <LeftSidebar />
        <div className={styles.content}>
          {children}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;