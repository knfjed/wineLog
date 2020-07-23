import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopImage from "../PageComponents/TopImage";

export default () => {
  return (
    <Root>
      <Header />

      <TopImage />

      <Footer />
    </Root>
  );
};

const Root = styled.div`
  margin: 0;
  background: "beige";
  font-family: "YuMincho";
  letter-spacing: 3;
  font-weight: 300;
  color: "lightgray";
`;
