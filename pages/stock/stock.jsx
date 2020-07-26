import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import WineBottle from "../../PageComponents/WineBottle";

const BASE_URL = "https://cdn.contentful.com";
const SPACE_ID = "ch9w92me3811";
const ENVIRONMENT_NAME = "master";
const CONTENT_TYPE = "wineData";
const CONTENTFUL_ACCESS_TOKEN = "q0h55-2EFD2NnujZdCaI-dCFGljZR4Bj99YpkvPUYOE";

// export default function Index({ contentful }) {
//   console.log("contentful.items[0].fields", contentful.items[0].fields);

//   return (
//     <Layout>
//       <WineBottle />
//       <WineBottle />
//       <WineBottle />
//       <WineBottle />
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const contentful = await fetch(
//     `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_NAME}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
//   );

//   return { props: { contentful: await contentful.json() } };
// }

// const WineBootle = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

export default class Stock extends Component {
  static async getInitialProps() {
    const contentful = await fetch(
      `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_NAME}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
    );
    const data = await contentful.json();

    return { wineData: data };
  }

  render() {
    const { wineData } = this.props;
    console.log(wineData.items[0].fields.id);

    return (
      <Layout>
        <Bottles>
          <WineBottle
            id={wineData.items[0].fields.id}
            date={wineData.items[0].fields.date}
            name={wineData.items[0].fields.name}
            category={wineData.items[0].fields.category}
            producer={wineData.items[0].fields.producer}
          />
          <WineBottle
            id={wineData.items[1].fields.id}
            date={wineData.items[1].fields.date}
            name={wineData.items[1].fields.name}
            category={wineData.items[1].fields.category}
            producer={wineData.items[1].fields.producer}
          />
          <WineBottle
            id={wineData.items[2].fields.id}
            date={wineData.items[2].fields.date}
            name={wineData.items[2].fields.name}
            category={wineData.items[2].fields.category}
            producer={wineData.items[2].fields.producer}
          />
          <WineBottle
            id={wineData.items[0].fields.id}
            date={wineData.items[0].fields.date}
            name={wineData.items[0].fields.name}
            category={wineData.items[0].fields.category}
            producer={wineData.items[0].fields.producer}
          />
          <WineBottle
            id={wineData.items[1].fields.id}
            date={wineData.items[1].fields.date}
            name={wineData.items[1].fields.name}
            category={wineData.items[1].fields.category}
            producer={wineData.items[1].fields.producer}
          />
          <WineBottle
            id={wineData.items[2].fields.id}
            date={wineData.items[2].fields.date}
            name={wineData.items[2].fields.name}
            category={wineData.items[2].fields.category}
            producer={wineData.items[2].fields.producer}
          />
          <WineBottle
            id={wineData.items[0].fields.id}
            date={wineData.items[0].fields.date}
            name={wineData.items[0].fields.name}
            category={wineData.items[0].fields.category}
            producer={wineData.items[0].fields.producer}
          />
          <WineBottle
            id={wineData.items[1].fields.id}
            date={wineData.items[1].fields.date}
            name={wineData.items[1].fields.name}
            category={wineData.items[1].fields.category}
            producer={wineData.items[1].fields.producer}
          />
          <WineBottle
            id={wineData.items[2].fields.id}
            date={wineData.items[2].fields.date}
            name={wineData.items[2].fields.name}
            category={wineData.items[2].fields.category}
            producer={wineData.items[2].fields.producer}
          />
          <WineBottle
            id={wineData.items[0].fields.id}
            date={wineData.items[0].fields.date}
            name={wineData.items[0].fields.name}
            category={wineData.items[0].fields.category}
            producer={wineData.items[0].fields.producer}
          />
          <WineBottle
            id={wineData.items[1].fields.id}
            date={wineData.items[1].fields.date}
            name={wineData.items[1].fields.name}
            category={wineData.items[1].fields.category}
            producer={wineData.items[1].fields.producer}
          />
          <WineBottle
            id={wineData.items[2].fields.id}
            date={wineData.items[2].fields.date}
            name={wineData.items[2].fields.name}
            category={wineData.items[2].fields.category}
            producer={wineData.items[2].fields.producer}
          />
          <WineBottle
            id={wineData.items[0].fields.id}
            date={wineData.items[0].fields.date}
            name={wineData.items[0].fields.name}
            category={wineData.items[0].fields.category}
            producer={wineData.items[0].fields.producer}
          />
          <WineBottle
            id={wineData.items[1].fields.id}
            date={wineData.items[1].fields.date}
            name={wineData.items[1].fields.name}
            category={wineData.items[1].fields.category}
            producer={wineData.items[1].fields.producer}
          />
          <WineBottle
            id={wineData.items[2].fields.id}
            date={wineData.items[2].fields.date}
            name={wineData.items[2].fields.name}
            category={wineData.items[2].fields.category}
            producer={wineData.items[2].fields.producer}
          />
          <WineBottle
            id={wineData.items[0].fields.id}
            date={wineData.items[0].fields.date}
            name={wineData.items[0].fields.name}
            category={wineData.items[0].fields.category}
            producer={wineData.items[0].fields.producer}
          />
          <WineBottle
            id={wineData.items[1].fields.id}
            date={wineData.items[1].fields.date}
            name={wineData.items[1].fields.name}
            category={wineData.items[1].fields.category}
            producer={wineData.items[1].fields.producer}
          />
          <WineBottle
            id={wineData.items[2].fields.id}
            date={wineData.items[2].fields.date}
            name={wineData.items[2].fields.name}
            category={wineData.items[2].fields.category}
            producer={wineData.items[2].fields.producer}
          />
        </Bottles>
      </Layout>
    );
  }
}

const Bottles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
`;
