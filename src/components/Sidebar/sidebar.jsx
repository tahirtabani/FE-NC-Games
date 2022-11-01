import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function Layout() {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/reviews" />}>
            View all reviews
          </MenuItem>
          <MenuItem routerLink={<Link to="/calendar" />}>
            {collapsed ? <>&#128214;</> : "Calendar"}
          </MenuItem>
          <MenuItem routerLink={<Link to="/e-commerce" />}>E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>☰</button>
      </main>
    </div>
  );
}

export default Layout;
