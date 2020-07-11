import React from "react";

export default function Info({
  name,
  category,
  taste,
  producer,
  home,
  price,
  url,
}) {
  return (
    <div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{taste}</p>
      <p>{producer}</p>
      <p>{home}</p>
      <p>{price}</p>
      <p>{url}</p>
    </div>
  );
}
