import "./hover-box.scss";
import React from "react";

function HoverBox({ children, notHover = false, ...rest }) {
  return notHover ? (
    children
  ) : (
    <div className="hover-box" {...rest}>
      {children}
    </div>
  );
}

export default HoverBox;
