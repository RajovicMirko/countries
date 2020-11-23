import "./select.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

import HoverBox from "../effects/HoverBox";

function Select({ options, style, onChange, notHover, defaultText, ...rest }) {
  const TC = useContext(ThemeContext);

  const selectStyle = {
    "--background-color": TC.colors.bgElement,
    "--color": TC.colors.text,
  };

  return (
    <HoverBox notHover={notHover}>
      <select
        className="select-custom"
        style={{ ...selectStyle, ...style }}
        onChange={(event) => onChange(event.target.value)}
        {...rest}
      >
        <option value="default">{defaultText}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </HoverBox>
  );
}

export default Select;
