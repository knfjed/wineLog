import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <Root>
        <Title>CONCEPT</Title>
        <Concept>
          <p>お家時間をゆったりとしたものにさせてくれるワイン。</p>
          <p>味、ラベル、作った人、いつ飲んだか、、、</p>
          <p>ログに残して、また思い出せるようにしよう。</p>
          <p>できれば、その時の気持ちも思い出せるように。</p>
          <p>そして、みんなと共有できるように。</p>
        </Concept>
      </Root>
    </Layout>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 90px auto;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 2px;
`;

const Concept = styled.div`
  font-size: 14px;
  margin: 0 auto 80px auto;
`;
