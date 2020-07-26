import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Contentful from "../../lib/contentful";

export default function Item({
  id,
  name,
  category,
  taste,
  producer,
  productionArea,
  price,
  url,
  packageImg,
}) {
  console.log("contentful", {
    id,
    name,
    category,
    taste,
    producer,
    productionArea,
    price,
    url,
    packageImg,
  });
  return (
    <Root>
      <Layout>
        <WineImage src={packageImg} alt={name} />

        <Info
          id={id}
          name={name}
          category={category}
          taste={taste}
          producer={producer}
          productionArea={productionArea}
          price={price}
          url={url}
        />
      </Layout>
    </Root>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const contentful = new Contentful();

  return {
    props: await contentful.getWine(params.item),
  };
}

const Root = styled.div`
  margin: 0;
  background-color: beige;
  font-family: YuMincho;
  letter-spacing: 3;
  font-weight: 300;
  color: black;
`;

const WineImage = styled.img`
  /* display: inline-block; */
  width: 300px;
  height: 300px;
  /* border-radius: 50%; */
  /* background-position: center; */
`;

const Info = styled.div`
  font-size: 16px;
`;
