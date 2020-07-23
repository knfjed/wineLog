import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WineBottle from "../../PageComponents/WineBottle";

const Stock = ({
  date,
  name,
  category,
  taste,
  producer,
  productionArea,
  price,
  url,
}) => (
  <Root>
    <Header />
    <WineBottle
      date={date}
      name={name}
      category={category}
      taste={taste}
      producer={producer}
      productionArea={productionArea}
      price={price}
      url={url}
    />
    <Footer />
  </Root>
);

Stock.getInitialProps = async () => {
  const space = "ch9w92me3811";
  const accessToken = "BNy24JRP1S43ycOl1B90rJaPnRxSlAoQOCm_TBnyi_Q";

  const client = contentful.createClient({ space, accessToken });

  const entryId = "7kbsF76DM4UZUtl2F9cT3S";
  const entry = await client.getEntry(entryId);
  return {
    date: entry.fields.date,
    name: entry.fields.name,
    category: entry.fields.category,
    taste: entry.fields.taste,
    producer: entry.fields.producer,
    productionArea: entry.fields.productionArea,
    price: entry.fields.price,
    url: entry.fields.url,
  };
};

export default Stock;
