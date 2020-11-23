import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme";

import Image from "../Image";
import HoverBox from "../effects/HoverBox";
import Scale from "../effects/Scale";

const TitleCustom = styled.h3`
  margin: 1rem 0;
`;
function CardTitle({ title }) {
  return <TitleCustom>{title}</TitleCustom>;
}

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;

  & strong,
  & span {
    font-size: 0.8rem;
  }
`;

function Card(props) {
  const TC = useContext(ThemeContext);
  const { img, title, description, onClick, style, notHover, ...rest } = props;

  const cardStyle = {
    background: TC.colors.bgElement,
    color: TC.colors.text,
  };

  return (
    <Scale>
      <HoverBox notHover={notHover}>
        <CardWrapper
          style={{ ...cardStyle, ...style }}
          {...rest}
          onClick={onClick}
        >
          <Image img={img} style={{ height: "180px", width: "100%" }} />
          <div style={{ margin: "1rem" }}>
            <CardTitle title={title} />
            {Object.keys(description).map((key) => {
              return (
                <p key={key}>
                  <strong>{key}</strong>: <span>{description[key]}</span>
                </p>
              );
            })}
          </div>
        </CardWrapper>
      </HoverBox>
    </Scale>
  );
}

export default Card;
