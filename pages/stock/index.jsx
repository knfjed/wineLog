import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import WineBottle from "../../PageComponents/WineBottle";
import sanitizeContentfulData from "../../util/sanitizeContentfulData";

const BASE_URL = "https://cdn.contentful.com";
const SPACE_ID = "ch9w92me3811";
const ENVIRONMENT_NAME = "master";
const CONTENT_TYPE = "wineData";
const CONTENTFUL_ACCESS_TOKEN = "q0h55-2EFD2NnujZdCaI-dCFGljZR4Bj99YpkvPUYOE";

export default function Index({ contentful }) {
  console.log("contentful", contentful);

  return (
    <Layout>
      {contentful.map(({ id, date, name, category, producer }, i) => (
        <WineBottle
          key={`wine-bottle-${id}-index-${i}`}
          id={id}
          date={date}
          name={name}
          category={category}
          producer={producer}
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const contentful = await fetch(
    `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_NAME}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
  );

  const contentfulJson = await contentful.json();

  return {
    props: { contentful: sanitizeContentfulData(contentfulJson) },
  };
}
