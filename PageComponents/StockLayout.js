import React from "react";
import Header from "../components/Header";
import WineBottle from "./WineBottle";

import Footer from "../components/Footer";

const layoutStyle = {
  marginLeft: "auto",
  marginRight: "auto",
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

const StockLayout = (mock) => (
  <div style={layoutStyle}>
    <Header />

    <div style={bottleStyle}>
      <WineBottle
        date={mock.date}
        name={mock.name}
        category={mock.category}
        home={mock.home}
      />
    </div>
    <Footer />
  </div>
);

export default StockLayout;
