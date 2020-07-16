import React from "react";
import Header from "../../components/Header";
import WineBottle from "../../PageComponents/WineBottle";
import Footer from "../../components/Footer";
import styled from "styled-components";

const wineData = [
  {
    id: 1,
    date: "2020.7.1",
    name: "MAKASHIVILI WINE CELLAR KISI",
    category: "white",
    taste: "Full body",
    producer: "VAZIANI COMPANY",
    productionArea: "Georgia",
    price: "4000yen",
    url: "https://wine.com",
  },
  {
    id: 2,
    date: "2020.7.1",
    name: "MAKASHIVILI WINE CELLAR KISI",
    category: "white",
    taste: "Full body",
    producer: "VAZIANI COMPANY",
    productionArea: "Georgia",
    price: "4000yen",
    url: "https://wine.com",
  },
  {
    id: 3,
    date: "2020.7.1",
    name: "MAKASHIVILI WINE CELLAR KISI",
    category: "white",
    taste: "Full body",
    producer: "VAZIANI COMPANY",
    productionArea: "Georgia",
    price: "4000yen",
    url: "https://wine.com",
  },
];

export default () => (
  <Root>
    <Header />

    <Bottles>
      {wineData.map(
        ({ id, date, name, category, producer, productionArea }, i) => (
          <WineBottle
            key={`wine-bottle-${i}`}
            id={id}
            date={date}
            name={name}
            category={category}
            producer={producer}
            productionArea={productionArea}
          />
        )
      )}
    </Bottles>

    <Footer />
  </Root>
);

const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: beige;
  font-family: YuMincho;
  letter-spacing: 3;
  font-weight: 300;
  color: lightgray;
`;

const Bottles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
