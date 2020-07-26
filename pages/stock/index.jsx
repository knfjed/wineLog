import React from "react";
import Layout from "../../components/Layout";
import Contentful from "../../lib/contentful";
import WineBottle from "../../PageComponents/WineBottle";

export default function Index({ contentful }) {
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
  const contentful = new Contentful();

  return {
    props: { contentful: await contentful.getWines() },
  };
}
