import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Topics from "../PageComponents/Topics";

export default () => {
  return (
    <Layout>
      <WineImage src="/topimg-wine.jpg" alt="ワインの写真" />
      <Topics />
      {/* <Arrow src="/arrow.svg" alt="矢印アイコン" /> */}
    </Layout>
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

const WineImage = styled.img`
  display: flex;
  width: 1000px;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

// const Arrow = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 60px;
//   height: 60px;
// `;
