import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <Root>
      <Logo>WINE手帳</Logo>
      <Sub>- WINE LOG -</Sub>

      <NavigationBar />
    </Root>
  );
}

const Root = styled.header`
  margin-left: 16px;
  margin-top: 0;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 3px;
  margin: 30px;
`;

const Sub = styled.p`
  font-size: 10px;
  margin-left: 65px;
  margin-top: -30px;
`;
