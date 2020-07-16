import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function NavigationBar() {
  return (
    <Nav>
      <Link href="/">
        <Content>TOP</Content>
      </Link>

      <Link href="/stock">
        <Content>STOCK</Content>
      </Link>

      <Link href="/contact">
        <Content>CONTACT</Content>
      </Link>
    </Nav>
  );
}

const Content = styled.div`
  margin-right: 15;
  text-decoration: none;
  color: "black";
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
