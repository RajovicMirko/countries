import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

function Icon({ icon, style, ...rest }) {
  const TC = useContext(ThemeContext);

  const iconStyle = {
    color: TC.colors.text,
  };

  return icon ? (
    <i className={icon} style={{ ...iconStyle, ...style }} {...rest} />
  ) : null;
}

export default Icon;
