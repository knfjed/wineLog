import React from "react";
import Nav from "./nav";

const headerStyle = {
  marginLeft: 16,
  marginTop: 0,
};

const Header = () => (
  <div style={headerStyle}>
    <h1>WINE手帳</h1>
    <Nav />
  </div>
);

export default Header;
