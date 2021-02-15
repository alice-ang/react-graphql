import React, { useState } from "react";
import styled from "styled-components";
import { Breakpoint } from "../../../styles";
import panda from "../../../assets/svg/panda.svg";
import { ImageCard } from "../../../components";
const MemoryContainer = styled.div`
  margin: 5px 5px;
  display: grid;
  grid-auto-rows: 150px 150px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-flow: dense;
  ${Breakpoint.Tablet} {
    grid-auto-rows: 250px 250px;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 0 auto;
  }
  ${Breakpoint.BigScreenOrLarger} {
    width: 80%;
    margin: 0 auto;
    grid-auto-rows: 250px 250px;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
const MemoryCard = (props) => {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div>
      <ImageCard
        src={panda}
        text="hej"
        backgroundColor={"red"}
        iconWidth={"50%"}
      />
    </div>
  );
};

export const Memory = () => {
  return (
    <MemoryContainer>
      <MemoryCard />
    </MemoryContainer>
  );
};
