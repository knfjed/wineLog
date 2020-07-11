import React from "react";
import Nav from "./Nav";

const headerStyle = {
  marginLeft: 16,
  marginTop: 0,
};

const logoStyle = {
  fontSize: 25,
  fontWeight: 300,
};

const Header = () => (
  <div style={headerStyle}>
    <h1 style={logoStyle}>WINE手帳</h1>
    <Nav />
  </div>
);

export default Header;
