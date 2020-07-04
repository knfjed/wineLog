import React from "react";
import Header from "./Header";
import WineBottle from "./WineBottle";
import Footer from "./Footer";

const layoutStyle = {
  margin: 0,
  background: "beige",
  fontFamily: "YuMincho",
  letterSpacing: 3,
  fontWeight: 300,
  fontColor: "lightgray",
};

const bottleStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const StockLayout = () => (
  <div style={layoutStyle}>
    <Header />
    <div style={bottleStyle}>
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
      <WineBottle />
    </div>
    <Footer />
  </div>
);

export default StockLayout;
