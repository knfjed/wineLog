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

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-weight: 100;
  font-family: "Yumincho", "Montserrat", sans-serif;
`;

const Content = styled.div`
  margin-right: 30px;
  text-decoration: none;

  display: inline-block;
  padding: 0.5em 1em;
  background: #f7f7f7;
  border-left: solid 6px #ff7c5c; /*左線*/
  color: #ff7c5c; /*文字色*/
  letter-spacing: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  margin-left: 20px;

  &:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }

  &:hover {
    cursor: pointer;
    font-weight: 200;
  }
`;

// const Link = styled.a`
//   &:hover {
//     color: crimson;
//   }
// `;
