import React from "react";

export default function Info({
  name,
  category,
  producer,
  // productionArea,
  price,
  url,
}) {
  return (
    <div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{producer}</p>
      {/* <p>{productionArea}</p> */}
      <p>{price}</p>
      <p>{url}</p>
    </div>
  );
}
