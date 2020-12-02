import React from "react";
import { Card } from "../../components/Card";
import styled from "styled-components";
import { Breakpoint } from "../../styles";
const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const HeroContainer = styled.div`
  min-height: 30vh;
  background-color: #91697e;
  ${Breakpoint.BigScreenOrLarger} {
    min-height: 50vh;
    background-color: yellow;
  }
`;
const CategoryContainer = styled.div`
  margin: 5px 20px;
  display: grid;
  grid-auto-rows: 200px 200px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  ${Breakpoint.LaptopOrLarger} {
    grid-auto-rows: 300px 300px;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  ${Breakpoint.BigScreenOrLarger} {
    width: 70%;
    margin: 0 auto;
  }
`;
const HomePage = () => {
  const categories = [
    {
      title: "Räkna ",
      color: "#f4b02d",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris justo, cursus in nulla sit amet, sodales interdum dolor. Aliquam dapibus placerat tellu.",
    },
    { title: "Skriva", color: "#8f647b" },
    { title: "Engelska", color: "#6db996" },
    { title: "Glosor", color: "#e98159" },
    { title: "Alfabetet", color: "#efb84d" },
    { title: "Klockan", color: "#6cba96" },
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
            />
          );
        })}
      </CategoryContainer>
    </Container>
  );
};

export default HomePage;
