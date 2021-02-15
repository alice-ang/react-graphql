import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Breakpoint, Colors } from "../../styles";
const GameContainer = styled.iframe`
  overflow: hidden;
  height: 100vh;
  width: 100%;
`;
const ExitButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${Colors.Primary};
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  font-size: 50px;
  line-height: 60px;
  color: white;
  text-align: center;
  position: fixed;
  right: 30px;
  bottom: 30px;
  svg {
    transform: scale(0.5);
  }
  ${Breakpoint.LaptopOrLarger} {
    display: none;
  }
  a {
    color: white;
  }
`;
const ExitBar = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  height: 100%;
  border-right: 2px solid white;
  a {
    color: white;
  }
  ${Breakpoint.TabletOrSmaller} {
    display: none;
  }
`;

export const GameFrame = (props) => {
  const history = useHistory();

  return (
    <div>
      <ExitButton>
        <Link to="/">
          <ImCross
            onClick={() => {
              history.goBack();
            }}
          />
        </Link>
      </ExitButton>
      <ExitBar>
        <Link to="/">
          <ImCross
            onClick={() => {
              history.goBack();
            }}
          />
        </Link>
      </ExitBar>
      <GameContainer
        src="https://vipgames.com/play/?affiliateId=wpFour/#/home"
        frameborder="0"
        scrolling="no"
        seamless="seamless"
        width="200%"
      >
        Your browser doesn't support iframes
      </GameContainer>
    </div>
  );
};
