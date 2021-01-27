import React from "react";
import styled from "styled-components";

const IconContainer = styled.img`
  text-align: center;
  display: block;
  width: ${(props) => props.width};
  height: 100%;
  object-position: 50% 50%;
  object-fit: contain;
`;

export const Icon = (props) => {
  return <IconContainer src={props.src} width={props.width}></IconContainer>;
};
