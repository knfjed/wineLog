import React from "react";
import Header from "./Header";
import TopImage from "./TopImage";
import Footer from "./Footer";

const layoutStyle = {
  margin: 0,
  background: "beige",
  fontFamily: "YuMincho",
  letterSpacing: 3,
  fontWeight: 300,
  fontColor: "lightgray",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <TopImage />
    <Footer />
  </div>
);

export default Layout;
