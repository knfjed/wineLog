import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function NavigationBar() {
  return (
    <Nav>
      <Link href="/">
        <Content>TOP</Content>
      </Link>

      <Link href="/list">
        <Content>LIST</Content>
      </Link>

      <Link href="/item">
        <Content>WINE</Content>
      </Link>

      <Link href="/contact">
        <Content>CONTACT</Content>
      </Link>
    </Nav>
  );
}

const Content = styled.div`
  margin-right: 30px;
  text-decoration: none;
  color: "black";
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
