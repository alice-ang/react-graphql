import React from "react";
import styled from "styled-components";

const GameContainer = styled.iframe`
  overflow: hidden;
  height: 100vh;
  width: 100%;
`;

export const GameFrame = (props) => {
  return (
    <div>
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
