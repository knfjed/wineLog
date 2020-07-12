import React from "react";
import Header from "../components/Header";
import TopImage from "./TopImage";
import Footer from "../components/Footer";
import styled from "styled-components";

const TopLayout = () => (
  <Div>
    <Header />
    <TopImage />
    <Footer />
  </Div>
);

const Div = styled.div`
  margin: 0;
  background: "beige";
  font-family: "YuMincho";
  letter-spacing: 3;
  font-weight: 300;
  color: "lightgray";
`;

export default TopLayout;
