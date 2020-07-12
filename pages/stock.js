import React from "react";
import Header from "../components/Header";
import WineBottle from "../PageComponents/WineBottle";
import Footer from "../components/Footer";
import styled from "styled-components";

const mock = [
  {
    date: "2020.7.1",
    name: "MAKASHIVILI WINE CELLAR KISI",
    category: "white",
    home: "Georgia",
  },
];

export default (mock) => (
  <Div>
    <Header />

    <Bottle>
      <WineBottle />
    </Bottle>
    <Footer />
  </Div>
);

const Div = styled.div`
  margin-left: "auto";
  margin-right: "auto";
  background: "beige";
  font-family: "YuMincho";
  letter-spacing: 3;
  font-weight: 300;
  color: "lightgray";
`;

const Bottle = styled.div`
  display: "flex";
  flex-wrap: "wrap";
`;
