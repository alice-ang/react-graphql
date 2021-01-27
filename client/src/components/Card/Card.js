import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardComponent = styled.div`
  background-color: ${(props) => props.cardColor};
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
  margin: 0;
  border-radius: 20px;
  h2 {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
  }
`;
export const Card = (props) => (
  <CardComponent cardColor={props.cardColor}>
    <Link to={props.link ? `${props.link}` : "/"}>
      <h2>{props.title}</h2>
    </Link>
  </CardComponent>
);
