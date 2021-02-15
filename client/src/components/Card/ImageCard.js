import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { Breakpoint } from "../../styles";
import { Link } from "react-router-dom";

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  position: relative;
  border-radius: 5px;
  a {
    color: #ffff;
    margin-left: 1em;
    position: absolute;
    text-decoration: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${Breakpoint.LaptopOrLarger} {
      font-size: 1.5em;
    }
  }
`;

export const ImageCard = (props) => {
  const { backgroundColor, src, link, text, iconWidth } = props;
  return (
    <Card backgroundColor={backgroundColor}>
      <Icon src={src} width={iconWidth} />
      <Link to={link ? `${link}` : "/"}>{text}</Link>
    </Card>
  );
};
