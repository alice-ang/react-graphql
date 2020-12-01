import React from "react";
import styled from "styled-components";
import ring from "../../assets/svg/ring.svg";

const Navigation = styled("nav")({
  height: "50px",
  display: "flex",
  padding: "5px 20px",
  lineHeight: "10px",
  justifyContent: "space-between",
  boxShadow: "0 2px 2px -2px rgba(0,0,0,.5)",
});

const NavIcon = styled("img")({
  width: "30px",
});
export const Navbar = () => {
  return (
    <Navigation>
      <NavIcon src={ring} />
      <h2>Hello</h2>
      <NavIcon src={ring} />
    </Navigation>
  );
};
