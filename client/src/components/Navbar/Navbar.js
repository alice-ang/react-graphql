import React, { useState } from "react";
import styled from "styled-components";
import ring from "../../assets/svg/ring.svg";
import { FaHamburger, FaUserAstronaut } from "react-icons/fa";
import { Breakpoint } from "../../styles";

import { ImCross } from "react-icons/im";

const Navigation = styled.nav`
  height: 50px;
  display: flex;
  padding: 5px 20px;
  line-height: 10px;
  justify-content: space-between;
  padding-bottom: 30px;
  /* box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.5); */
`;

const DrawerMenu = styled.div`
  height: 100%;
  width: ${(props) => (props.open ? "250px" : "0px")};
  ${Breakpoint.LaptopOrLarger} {
    width: ${(props) => (props.open ? "350px" : "0px")};
  }
  position: fixed;
  z-index: 1;
  -moz-box-shadow: -3px 0 5px 0 #555;
  -webkit-box-shadow: -3px 0 5px 0 #555;
  box-shadow: -3px 0 5px 0 #555;
  top: 0;
  left: 0;
  background-color: papayawhip;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  ul {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  li {
    list-style: none;
  }
`;

const NavIcon = styled.img`
  width: 30px;
`;

const Drawer = (props) => {
  return <DrawerMenu open={props.open}></DrawerMenu>;
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ToggleLink = () => setOpen(!isOpen);

  return (
    <div>
      <Navigation>
        <NavIcon src={ring} />
        <h2>Learn</h2>
        {isOpen ? (
          <ImCross
            onClick={ToggleLink}
            size="30px"
            color="#f3af2e"
            title="exit menu button"
            style={{ marginTop: "10px" }}
          />
        ) : (
          <FaHamburger
            onClick={ToggleLink}
            size="30px"
            color="#f3af2e"
            title="menu button"
            style={{ marginTop: "10px" }}
          />
        )}
      </Navigation>
      <Drawer open={isOpen} />
    </div>
  );
};
