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
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h3 {
    margin: 0;
    color: #fff;
    text-align: center;
    ${Breakpoint.LaptopOrLarger} {
      margin-top: 20px;
    }
  }
`;
export const ImageCard = (props) => {
  const { backgroundColor, src, link, text, iconWidth } = props;
  return (
    <Card backgroundColor={backgroundColor}>
      <Container>
        <Icon src={src} width={iconWidth} />
        <Link to={link ? `${link}` : "/"}>
          <h4>{text}</h4>
        </Link>
      </Container>
    </Card>
  );
};
