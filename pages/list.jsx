import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Winebottle from "../PageComponents/WineBottle";

export default function List({ date, name, category, producer }) {
  return (
    <Layout>
      <WineList>
        <Winebottle date={date} />
        <Winebottle />
        <Winebottle />
        <Winebottle />
        <Winebottle />
        <Winebottle />
        <Winebottle />
        <Winebottle />
      </WineList>
    </Layout>
  );
}

List.getInitialProps = async () => {
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

const WineList = styled.div`
  display: flex;
`;
