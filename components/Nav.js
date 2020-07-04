import React from "react";

const navStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  listStyle: "none",
};

const Nav = () => (
  <nav>
    <ul style={navStyle}>
      <li>TOP</li>
      <li>CONCEPT</li>
      <li>CONTACT</li>
    </ul>
  </nav>
);

export default Nav;
