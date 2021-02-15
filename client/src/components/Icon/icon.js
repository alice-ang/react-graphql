import React from "react";
import styled from "styled-components";

const IconContainer = styled.img`
  width: ${(props) => props.width};
  height: 100%;
`;

export const Icon = (props) => {
  return <IconContainer src={props.src} width={props.width}></IconContainer>;
};
