import React from "react";
import styled from "styled-components";
import Info from "../../PageComponents/Info";
import Layout from "../../components/Layout";

const Item = ({
  name,
  category,
  taste,
  producer,
  productionArea,
  price,
  url,
}) => (
  <Root>
    <Layout>
      <WineImage src="/details-wine.jpg" />

      <Info
      // name={name}
      // category={category}
      // taste={taste}
      // producer={producer}
      // productionArea={productionArea}
      // price={price}
      // url={url}
      />
    </Layout>
  </Root>
);

// Item.getInitialProps = async () => {
//   const contentful = require("contentful");

//   const space = "ch9w92me3811";
//   const accessToken = "BNy24JRP1S43ycOl1B90rJaPnRxSlAoQOCm_TBnyi_Q";

//   const client = contentful.createClient({ space, accessToken });

//   const entryId = "7kbsF76DM4UZUtl2F9cT3S";
//   const entry = await client.getEntry(entryId);

//   return {
//     name: entry.fields.name,
//     category: entry.fields.category,
//     taste: entry.fields.taste,
//     producer: entry.fields.producer,
//     productionArea: entry.fields.productionArea,
//     price: entry.fields.price,
//     url: entry.fields.url,
//   };
// };

const Root = styled.div`
  margin: 0;
  background-color: beige;
  font-family: YuMincho;
  letter-spacing: 3;
  font-weight: 300;
  color: black;
`;

const WineImage = styled.img`
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-position: center;
`;

export default Item;
