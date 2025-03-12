"use client";
import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);

  const toggleLeftSidebar = () => {
    setLeftSidebarVisible(!isLeftSidebarVisible);
  };

  const toggleRightSidebar = () => {
    setRightSidebarVisible(!isRightSidebarVisible);
  };

  return (
    <SidebarContext.Provider value={{ isLeftSidebarVisible, isRightSidebarVisible, toggleLeftSidebar, toggleRightSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};