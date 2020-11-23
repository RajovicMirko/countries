import "./layout.scss";
import React from "react";

import NavBar from "../NavBar";

function Layout({ children }) {
  return (
    <div id="layout">
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
