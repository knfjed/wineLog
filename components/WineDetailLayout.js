import React from "react";
import Header from "./Header";
import DetailImage from "./DetailImage";
import Footer from "./Footer";

const DetailLayoutStyle = {
  margin: 0,
  background: "beige",
  fontFamily: "YuMincho",
  letterSpacing: 3,
  fontWeight: 300,
  fontColor: "lightgray",
};

const WineDetailLayout = () => (
  <div style={DetailLayoutStyle}>
    <Header />
    <DetailImage />
    <Footer />
  </div>
);

export default WineDetailLayout;
