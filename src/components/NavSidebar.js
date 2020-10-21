import React from "react";
import { NavSidebarWrapper } from ".";
import { PAGES } from "../pages";

const NavSidebar = ({ sidebarOpen, onPageNameClick }) => (
  <NavSidebarWrapper open={sidebarOpen}>
    {Object.keys(PAGES).map((page) => (
      <button
        onClick={() => onPageNameClick(PAGES[page].id)}
        key={PAGES[page].id}
      >
        <h2>{PAGES[page].name}</h2>
      </button>
    ))}
  </NavSidebarWrapper>
);

export default NavSidebar;
