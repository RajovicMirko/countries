import React, { createContext, useState } from "react";

const themes = {
  light: {
    bgElement: "hsl(0, 0%, 100%)",
    bg: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    bgInput: "hsl(0, 0%, 52%)",
  },
  dark: {
    bgElement: "hsl(209, 23%, 22%)",
    bg: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
  },
};

export const ThemeContext = createContext();

function Theme({ children }) {
  const [theme, setTheme] = useState("light");

  const changeTheme = (themeType) => {
    setTheme(themeType);
  };

  const provide = {
    theme,
    changeTheme,
    colors: themes[theme],
  };

  return (
    <ThemeContext.Provider value={provide}>{children}</ThemeContext.Provider>
  );
}

export default Theme;
