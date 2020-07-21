import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WineBottle from "../../PageComponents/WineBottle";

const BASE_URL = "https://cdn.contentful.com";
const SPACE_ID = "ch9w92me3811";
const ENVIRONMENT_NAME = "master";
const CONTENT_TYPE = "wineData";
const CONTENTFUL_ACCESS_TOKEN = "q0h55-2EFD2NnujZdCaI-dCFGljZR4Bj99YpkvPUYOE";

export default function Index({ contentful }) {
  console.log("contentful.items[0].fields", contentful.items[0].fields);

  return (
    <Root>
      <Header />

      <Bottles>
        {/* {Index.map(
          ({ id, date, name, category, producer, productionArea }, i) => (
            <WineBottle
              key={`wine-bottle-${i}`}
              id={id}
              date={date}
              name={name}
              category={category}
              producer={producer}
              productionArea={productionArea}
            />
          )
        )} */}
      </Bottles>

      <Footer />
    </Root>
  );
}

export async function getStaticProps() {
  const contentful = await fetch(
    // `${BASE_URL}/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT_NAME}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=${process.env.CONTENT_TYPE}`
    `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_NAME}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
  );

  return { props: { contentful: await contentful.json() } };
}

const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: beige;
  font-family: YuMincho;
  letter-spacing: 3;
  font-weight: 300;
  color: lightgray;
`;

const Bottles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
