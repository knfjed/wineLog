import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default ({ children }) => (
  <Root>
    <Head>
      <title>WINE手帳</title>
    </Head>

    <Header />

    {children}

    <Footer />
  </Root>
);

const Root = styled.div`
  margin-left: 0;
  margin-right: 0;
  background: white;
  font-family: "YuMincho";
  letter-spacing: 3;
  font-weight: 300;
`;

// const Head = styled.div`
//   margin: 0;
// `;
