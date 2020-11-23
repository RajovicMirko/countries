import "./button.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

import Icon from "../Icon";
import HoverBox from "../effects/HoverBox";

function Button({
  children,
  icon,
  style: { width, padding, ...restStyle } = {},
  notHover,
  flat = false,
  ...rest
}) {
  const TC = useContext(ThemeContext);

  const buttonStyle = {
    "--background-color": flat ? "none" : TC.colors.bgElement,
    "--color": TC.colors.text,
    "--padding": flat ? "none" : "0.7rem 1.7rem",
    "--margin-icon": flat ? "0 0.5rem" : "none",
  };

  return (
    <HoverBox notHover={notHover} style={restStyle}>
      <button
        className="button-custom"
        style={{ ...buttonStyle, width, padding }}
        {...rest}
      >
        <Icon icon={icon} />
        {children}
      </button>
    </HoverBox>
  );
}

export default Button;
