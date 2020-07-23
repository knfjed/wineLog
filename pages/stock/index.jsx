import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
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
      <Layout>
        <WineBottle />
      </Layout>
    </Root>
  );
}

export async function getStaticProps() {
  const contentful = await fetch(
    `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_NAME}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
  );

  return { props: { contentful: await contentful.json() } };
}

const WineBottle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
