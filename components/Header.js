import React, { Component } from "react";
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
      <header>
        <div>{this.props.header}</div>
        <h1>{this.props.title}</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
