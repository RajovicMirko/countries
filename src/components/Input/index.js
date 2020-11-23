import "./input.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

import Icon from "../Icon";
import HoverBox from "../effects/HoverBox";

function Input({
  type,
  icon,
  placeholder,
  onChange,
  notHover,
  style,
  ...rest
}) {
  const TC = useContext(ThemeContext);

  const inputWrapperStyle = {
    "--background-color": TC.colors.bgElement,
    "--color": TC.colors.text,
  };

  return (
    <HoverBox notHover={notHover}>
      <div
        className="input-wrapper"
        style={{ ...inputWrapperStyle, ...style }}
        {...rest}
      >
        <Icon icon={icon} />
        <input
          type={type}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
        />
      </div>
    </HoverBox>
  );
}

export default Input;
