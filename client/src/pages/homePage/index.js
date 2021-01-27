import React from "react";
import { Card } from "../../components/Card";
import styled from "styled-components";
import { Breakpoint, Gaps } from "../../styles";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const CategoryContainer = styled.div`
  margin: 5px 20px;
  display: grid;
  grid-auto-rows: 200px 200px;
  grid-gap: ${Gaps.Small};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  ${Breakpoint.LaptopOrLarger} {
    grid-auto-rows: 300px 300px;
    grid-gap: ${Gaps.Medium};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  ${Breakpoint.BigScreenOrLarger} {
    width: 70%;
    margin: 0 auto;
  }
`;
export const HomePage = () => {
  const categories = [
    {
      title: "Räkna ",
      color: "#f4b02d",
      link: "math",
    },
    { title: "Skriva", color: "#8f647b", link: "writing" },
    { title: "Engelska", color: "#b96db0", link: "english" },
    { title: "Glosor", color: "#e98159", link: "vocabulary" },
    { title: "Alfabetet", color: "#6d88b9", link: "alphabet" },
    { title: "Klockan", color: "#78ba6c", link: "clock" },
  ];

  return (
    <Container>
      <CategoryContainer>
        {categories.map((category, i) => {
          return (
            <Card
              title={category.title}
              cardColor={category.color}
              text={category.description}
              link={category.link}
              key={i}
            />
          );
        })}
      </CategoryContainer>
    </Container>
  );
};
