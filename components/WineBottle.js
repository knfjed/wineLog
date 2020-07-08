import React from "react";
import Link from "next/link";

const displayStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 90,
};

const wineBottleStyle = {
  width: 100,
  height: "auto",
  marginTop: 20,
};

const soilStyle = {
  width: 150,
  height: 200,
  backgroundColor: "burlywood",
  borderRadius: 10,
  textAlign: "center",
  paddingTop: 40,
  fontSize: 12,
};

function Winebottle({ date, name, category, taste, producer, home }) {
  return (
    <div style={displayStyle}>
      <date>{date}</date>
      <a href="/wineDetail">
        <img
          style={wineBottleStyle}
          src="./wineBottleIcon.svg"
          alt="ワインボトル"
        />
      </a>
      <div style={soilStyle}>
        <p>{name}</p>
        <p>{category}</p>
        <p>{taste}</p>
        <p>{producer}</p>
        <p>{home}</p>
      </div>
    </div>
  );
}

export default Winebottle;
