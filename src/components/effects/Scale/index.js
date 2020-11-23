import "./scale.scss";
import React from "react";

function Scale({ children, ...rest }) {
  return (
    <div className="scale" {...rest}>
      {children}
    </div>
  );
}

export default Scale;
