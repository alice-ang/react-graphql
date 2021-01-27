import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../styles";

export const Footer = () => {
  const FooterContainer = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  `;
  return (
    <FooterContainer>
      <p>Copyright © 2020 | Utvecklad med ♥ av Alice Anglesjö</p>
    </FooterContainer>
  );
};
