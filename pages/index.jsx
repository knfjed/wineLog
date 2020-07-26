import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Topics from "../PageComponents/Topics";

export default () => {
  return (
    <Layout>
      <WineImage src="/topimg-wine.jpg" alt="ワインの写真" />
      <Topics />
    </Layout>
  );
};

const WineImage = styled.img`
  display: flex;
  position: relative;
  width: 1000px;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;
