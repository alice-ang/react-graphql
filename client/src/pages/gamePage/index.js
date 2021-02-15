import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../styles";
import lion from "../../assets/svg/lejon.svg";
import { Hero, ImageCard } from "../../components/index";
const GamePageContainer = styled.div`
  margin: 5px 5px;
  display: grid;
  grid-auto-rows: 150px 150px;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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

export const GamePage = () => {
  const test = [
    {
      title: "Spel 1",
      color: "#f4b02d",
      link: "math",
    },
    { title: "Spel 2", color: "#8f647b", link: "writing" },
    { title: "Spel 3", color: "#b96db0", link: "english" },
    { title: "Spel 4", color: "#e98159", link: "vocabulary" },
    { title: "Spel 5", color: "#6d88b9", link: "alphabet" },
    { title: "Spel 6", color: "#78ba6c", link: "clock" },
  ];

  return (
    <div>
      <Hero title="title" />
      <GamePageContainer>
        {test.map((item, i) => {
          return (
            <ImageCard
              key={i}
              src={lion}
              text={item.title}
              backgroundColor={item.color}
              iconWidth={"50%"}
            />
          );
        })}
      </GamePageContainer>
    </div>
  );
};
