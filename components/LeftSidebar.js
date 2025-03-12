import React from 'react';
import Link from 'next/link';
import styles from './LeftSidebar.module.css';

const LeftSidebar = () => {
  return (
    <div className={styles.leftSidebar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tutorials">Tutorials</Link></li>
        <li><Link href="/node-studio">Node Studio</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/documentation">Documentation</Link></li>
      </ul>
    </div>
  );
};

export default LeftSidebar;