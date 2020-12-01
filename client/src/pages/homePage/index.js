import React from "react";
import { Card } from "../../components/Card";
import styled from "styled-components";
import { Breakpoint } from "../../styles";
const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const HeroContainer = styled("div")({
  minHeight: "30vh",
  backgroundColor: "green",
  [Breakpoint.Desktop]: {
    minHeight: "50vh",
    backgroundColor: "yellow",
  },
});
const CategoryContainer = styled("div")({
  margin: "5px 20px",
  display: "grid",
  gridAutoRows: "200px 200px",
  gridGap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gridAutoFlow: "dense",
  [Breakpoint.LaptopOrLarger]: {
    gridAutoRows: "300px 300px",
    gridGap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
  },
  [Breakpoint.BigScreenOrLarger]: {
    width: "70%",
    margin: "0 auto",
  },
});
const HomePage = () => {
  const categories = [
    { title: "Lion ", color: "#f4b02d" },
    { title: "Hippo", color: "#8f647b" },
    { title: "Rabbit", color: "#6db996" },
    { title: "Girafe", color: "#e98159" },
    { title: "Tiger", color: "#efb84d" },
    { title: "Bear", color: "#6cba96" },
  ];

  return (
    <Container>
      <HeroContainer></HeroContainer>
      <CategoryContainer>
        {categories.map((category, i) => {
          return <Card title={category.title} cardColor={"blue"} key={i} />;
        })}
      </CategoryContainer>
    </Container>
  );
};

export default HomePage;
