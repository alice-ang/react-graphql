import React from "react";
import styled from "styled-components";

const GameContainer = styled("iframe")({
  overflow: "hidden",
  height: "80vh",
  width: "100%",
});

export const GameFrame = (props) => {
  return (
    <GameContainer src={props.source} frameborder="0" width="100%">
      Your browser doesn't support iframes
    </GameContainer>
  );
};
