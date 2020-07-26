import React from "react";
// import { useRouter } from "next/router";
import styled from "styled-components";
// import Info from "../../PageComponents/Info";
import Layout from "../../components/Layout";

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

Item.getInitialProps = async () => {
  const contentful = require("contentful");

  const space = "ch9w92me3811";
  const accessToken = "BNy24JRP1S43ycOl1B90rJaPnRxSlAoQOCm_TBnyi_Q";

  const client = contentful.createClient({ space, accessToken });

  const entryId = "7kbsF76DM4UZUtl2F9cT3S";
  const entry = await client.getEntry(entryId);

  return {
    name: entry.fields.name,
    category: entry.fields.category,
    taste: entry.fields.taste,
    producer: entry.fields.producer,
    productionArea: entry.fields.productionArea,
    price: entry.fields.price,
    url: entry.fields.url,
  };
};

// const BASE_URL = "https://cdn.contentful.com";
// const SPACE_ID = "ch9w92me3811";
// const ENVIRONMENT_NAME = "master";
// const CONTENT_TYPE = "wineData";
// const CONTENTFUL_ACCESS_TOKEN = "q0h55-2EFD2NnujZdCaI-dCFGljZR4Bj99YpkvPUYOE";

// export default class Item extends Component {
//   static async getInitialProps() {
//     const contentful = await fetch(
//       `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT_NAME}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`
//     );
//     const data = await contentful.json();

//     return { wineData: data };
//   }

//   render() {
//     const { wineData } = this.props;
//     console.log("wineData.item[0].category:", wineData.items[0].category);

//     return (
//       <Root>
//         <Layout>
//           <WineImage
//             src={wineData.items[`${id}`].package}
//             alt={wineData.items[`${id}`].name}
//           />

//           <Info
//             name={wineData.items[`${id}`].name}
//             category={wineData.category}
//             taste={wineData.taste}
//             producer={wineData.producer}
//             // productionArea={productionArea}
//             price={wineData.price}
//             url={wineData.url}
//           />
//         </Layout>
//       </Root>
//     );
//   }
// }

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
