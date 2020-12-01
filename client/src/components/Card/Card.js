import React from "react";
import styled from "styled-components";

const CardComponent = styled("div")({
  backgroundColor: `${(props) => props.cardColor}`,
  position: "relative",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  margin: 0,
  borderRadius: 20,
  "& h2": {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: 0,
    transform: "translate(-50%, -50%)",
  },
});

export const Card = (props) => {
  return (
    <CardComponent>
      <h2>{props.title}</h2>
    </CardComponent>
  );
};
