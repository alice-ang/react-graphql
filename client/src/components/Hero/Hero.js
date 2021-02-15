import React from "react";
import styled from "styled-components";
import { Breakpoint, Gaps } from "../../styles";

const HeroContainer = styled.div`
  min-height: 30vh;
  background-color: #91697e;
  position: relative;
  margin-bottom: ${Gaps.Small};
  h2 {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
  }
  ${Breakpoint.LaptopOrLarger} {
    min-height: 50vh;
    background-color: #e98159;
    margin-bottom: ${Gaps.Medium};
  }
`;
export const Hero = (props) => {
  return (
    <HeroContainer>
      <h2>{props.title}</h2>
    </HeroContainer>
  );
};
