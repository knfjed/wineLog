import React from "react";
import Header from "../components/Header";
import DetailImage from "./DetailImage";
import Info from "./Info";
import Footer from "../components/Footer";

const DetailLayoutStyle = {
  margin: 0,
  background: "beige",
  fontFamily: "YuMincho",
  letterSpacing: 3,
  fontWeight: 300,
  fontColor: "lightgray",
};

export default function WineDetailLayout({
  name,
  category,
  taste,
  producer,
  home,
  price,
  url,
}) {
  (name = "MAKASHIVILI WINE CELLAR KISI"),
    (category = "white"),
    (taste = "Full body"),
    (producer = "VAZIANI COMPANY"),
    (home = "Georgia");

  return (
    <div style={DetailLayoutStyle}>
      <Header />

      <DetailImage />

      <Info
        name={name}
        category={category}
        taste={taste}
        producer={producer}
        home={home}
        price={price}
        url={url}
      />

      <Footer />
    </div>
  );
}
