import React from "react";
import styled from "styled-components";

const Heart = styled.span`
  color: #f79;
`;
export const Footer = () => {
  const FooterContainer = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  `;

  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <FooterContainer>
      <p>
        Copyright © {getDate()} | Utvecklad med <Heart>♥</Heart> av Alice
        Anglesjö
      </p>
    </FooterContainer>
  );
};
