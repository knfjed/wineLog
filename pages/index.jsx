import React from "react";
import styled from "styled-components";

export default () => (
  <Root>
    <Header />

    <TopImage />

    <Footer />
  </Root>
);

const Root = styled.div`
  margin: 0;
  background: "beige";
  font-family: "YuMincho";
  letter-spacing: 3;
  font-weight: 300;
  color: "lightgray";
`;
