import React from "react";
import Header from "../components/Header";
import TopImage from "./TopImage";
import Footer from "../components/Footer";

const layoutStyle = {
  margin: 0,
  background: "beige",
  fontFamily: "YuMincho",
  letterSpacing: 3,
  fontWeight: 300,
  fontColor: "lightgray",
};

const TopLayout = () => (
  <div style={layoutStyle}>
    <Header />
    <TopImage />
    <Footer />
  </div>
);

export default TopLayout;
