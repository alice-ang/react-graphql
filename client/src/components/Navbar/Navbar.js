import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { Breakpoint } from "../../styles";

import { ImCross } from "react-icons/im";

const Navigation = styled.nav`
  height: 50px;
  display: flex;
  padding: 5px 20px;
  line-height: 10px;
  justify-content: space-between;
  /* box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.5); */
`;

const DrawerMenu = styled.div`
  height: 100%;
  min-height: 100%;
  width: ${(props) => (props.open ? "250px" : "0px")};
  ${Breakpoint.LaptopOrLarger} {
    width: ${(props) => (props.open ? "350px" : "0px")};
  }
  position: fixed;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  -moz-box-shadow: -3px 0 5px 0 #555;
  -webkit-box-shadow: -3px 0 5px 0 #555;
  box-shadow: -3px 0 5px 0 #555;
  top: 0;
  left: 0;
  background-color: papayawhip;
  overflow-x: hidden;
  transition: 0.5s;
  ul {
    list-style: none;
    transition: 0.5s;
    padding: 0;
    opacity: ${(props) => (props.open ? 1 : 0)};
  }
  li a {
    color: #555;
    text-decoration: none;
    transition: 0.3s;
    margin: 10px 0px;
    &:hover {
      transform: scale(1.1);
      font-weight: bold;
    }
  }
`;

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ToggleLink = () => setOpen(!isOpen);

  const options = [
    { name: "Hem" },
    { name: "Öva", link: "training" },
    { name: "Framsteg", link: "progress" },
    { name: "Statisitk", link: "statistic" },
    { name: "Inställningar", link: "settings" },
  ];
  return (
    <div>
      <Navigation>
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
      <DrawerMenu open={isOpen}>
        <div>
          <ul>
            {options.map((option, i) => {
              return (
                <li key={i}>
                  <Link
                    to={option.link ? `${option.link}` : "/"}
                    onClick={ToggleLink}
                  >
                    {option.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </DrawerMenu>
    </div>
  );
};
