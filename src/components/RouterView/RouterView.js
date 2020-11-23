import "./router-view.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

function RouterView({ header, children, style }) {
  const TC = useContext(ThemeContext);

  const routerViewStyle = {
    backgroundColor: TC.colors.bg,
    color: TC.colors.text,
  };

  return (
    <div className="router-view" style={{ ...routerViewStyle, ...style }}>
      <header>{header}</header>
      <main>{children}</main>
    </div>
  );
}

export default RouterView;
