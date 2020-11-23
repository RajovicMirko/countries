import React from "react";
import styled from "styled-components";

const PCustom = styled.div`
  display: grid;
  grid-template-columns: auto;
  font-size: 0.9rem;
  gap: 1rem;

  & strong {
    flex: 1
    margin-right: 0.5rem;
  }

  & div {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.5rem;
    width: 100%;
  }
`;

function IdValueDescription({ id, value, children, ...rest }) {
  return (
    <PCustom {...rest}>
      <strong>{id}:</strong>
      <div>{value || children}</div>
    </PCustom>
  );
}

export default IdValueDescription;
