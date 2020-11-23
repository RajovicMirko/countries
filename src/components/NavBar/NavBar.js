import React, { useContext } from "react";
import styled from "styled-components";

import Button from "../Button";
import { ThemeContext } from "../Theme";

const NavWrapper = styled.nav`
  display: flex;
  padding: 1rem 3rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
  zindex: 1000;
`;

function Brand({ children }) {
  return <h3>{children}</h3>;
}

function NavBar() {
  const TC = useContext(ThemeContext);

  const navWrapperStile = {
    background: TC.colors.bgElement,
    color: TC.colors.text,
  };

  const buttonIcon = TC.theme === "dark" ? "fas fa-moon" : "far fa-moon";

  const handleClick = () => {
    TC.changeTheme(TC.theme === "dark" ? "light" : "dark");
  };

  return (
    <NavWrapper style={navWrapperStile}>
      <Brand>Where in the world?</Brand>
      <Button
        notHover
        flat
        icon={buttonIcon}
        onClick={handleClick}
        style={{ width: "95px" }}
      >
        Dark Mode
      </Button>
    </NavWrapper>
  );
}

export default NavBar;
