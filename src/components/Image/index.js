import React from "react";
import styled from "styled-components";

const ImageCustom = styled.img`
  width: 100%;
  height: auto;
`;

function Image({ img, ...rest }) {
  return <ImageCustom src={img} {...rest} />;
}

export default Image;
