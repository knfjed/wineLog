import React from "react";

export default function Info(wineData) {
  return (
    <div>
      <p>{wineData.name}</p>
      <p>{wineData.category}</p>
      <p>{wineData.taste}</p>
      <p>{wineData.producer}</p>
      <p>{wineData.home}</p>
      <p>{wineData.price}</p>
      <p>{wineData.url}</p>
    </div>
  );
}
