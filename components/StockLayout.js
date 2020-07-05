import React from "react";
import Header from "./Header";
import WineBottle from "./WineBottle";
import Footer from "./Footer";

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

const StockLayout = ({ date, name, category, taste, producer, home }) => (
  <div style={layoutStyle}>
    <Header />
    <div style={bottleStyle}>
      <WineBottle
        date={"2020.7.1"}
        name={"MAKASHIVILI WINE CELLAR KISI"}
        category={"white"}
        taste={"Full body"}
        producer={"VAZIANI COMPANY"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.10"}
        name={"MTSVANE"}
        category={"white"}
        taste={"Full body"}
        producer={"SCHUCHMANN WINES"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.12"}
        name={"RKATSITELI"}
        category={"white"}
        taste={"Full body"}
        producer={"ORGO"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.20"}
        name={"MAKASHIVILI WINE CELLAR KHIKHVI"}
        category={"white"}
        taste={"Medium body"}
        producer={"VAZIANI COMPANY"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.13"}
        name={"MTSVANE"}
        category={"white"}
        taste={"Full body"}
        producer={"SCHUCHMANN WINES"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.20"}
        name={"RKATSITELI"}
        category={"white"}
        taste={"Full body"}
        producer={"ORGO"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.22"}
        name={"MAKASHIVILI WINE CELLAR KISI"}
        category={"white"}
        taste={"Full body"}
        producer={"VAZIANI COMPANY"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.24"}
        name={"MTSVANE"}
        category={"white"}
        taste={"Full body"}
        producer={"SCHUCHMANN WINES"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.27"}
        name={"RKATSITELI"}
        category={"white"}
        taste={"Full body"}
        producer={"ORGO"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.7.30"}
        name={"MAKASHIVILI WINE CELLAR KHIKHVI"}
        category={"white"}
        taste={"Medium body"}
        producer={"VAZIANI COMPANY"}
        home={"Georgia"}
      />
      <WineBottle
        date={"2020.8.2"}
        name={"MAKASHIVILI WINE CELLAR KISI"}
        category={"white"}
        taste={"Full body"}
        producer={"VAZIANI COMPANY"}
        home={"Georgia"}
      />
    </div>
    <Footer />
  </div>
);

export default StockLayout;
