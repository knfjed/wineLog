import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Info from "../../PageComponents/Info";

const wineData = {
  date: "2020.",
  name: "MAKASHIVILI WINE CELLAR KISI",
  category: "white",
  taste: "Full body",
  producer: "VAZIANI COMPANY",
  home: "Georgia",
  price: "4000yen",
  url: "https://wine.com",
};

export default () => {
  return (
    <Root>
      <Header />

      <WineImage src="/details-wine.jpg" />

      <Info
        name={wineData.name}
        category={wineData.category}
        taste={wineData.taste}
        producer={wineData.producer}
        home={wineData.home}
        price={wineData.price}
        url={wineData.url}
      />

      <Footer />
    </Root>
  );
};

const Root = styled.div`
  margin: 0;
  background-color: beige;
  font-family: YuMincho;
  letter-spacing: 3;
  font-weight: 300;
  color: lightgray;
`;

const WineImage = styled.img`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-position: center;
`;
