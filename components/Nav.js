import React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black",
};

const navStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
};

const Nav = () => (
  <nav style={navStyle}>
    <Link href="/">
      <a style={linkStyle}>TOP</a>
    </Link>
    <Link href="/stock">
      <a style={linkStyle}>STOCK</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>CONTACT</a>
    </Link>
  </nav>
);

export default Nav;
