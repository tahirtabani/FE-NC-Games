import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function Layout() {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/home" />}>
            {collapsed ? <>&#128214;</> : "Home"}
          </MenuItem>
          <MenuItem routerLink={<Link to="/reviews" />}>
            {collapsed ? <>&#128214;</> : "View all reviews"}
          </MenuItem>
          <MenuItem routerLink={<Link to="/catgeories" />}>
            {collapsed ? <>&#128214;</> : "Categories"}
          </MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>☰</button>
      </main>
    </div>
  );
}

export default Layout;
