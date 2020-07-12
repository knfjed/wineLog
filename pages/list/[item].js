import React from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import DetailImage from "../PageComponents/DetailImage";
import Info from "../PageComponents/Info";
import Footer from "../components/Footer";
import styled from "styled-components";

const wineData = [
  {
    name: "MAKASHIVILI WINE CELLAR KISI",
    category: "white",
    taste: "Full body",
    producer: "VAZIANI COMPANY",
    home: "Georgia",
    price: "4000yen",
    url: "https://wine.com",
  },
];

export default (wineData) => {
  const router = useRouter();
  console.log("router", router);

  return (
    <Div>
      <Header />

      <DetailImage />

      <Info
        name={wineData.name}
        category={wineData.category}
        taste={wineData.taste}
        producer={wineData.producer}
        home={wineData.home}
        price={wineDataprice}
        url={wineData.url}
      />

      <Footer />
    </Div>
  );
};

const Div = styled.div`
  margin: 0;
  background: "beige";
  font-family: "YuMincho";
  letter-spacing: 3;
  font-weight: 300;
  color: "lightgray";
`;
