import React from "react";
import Link from "next/link";
import styled from "styled-components";

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
    <Root>
      <date>{date}</date>

      <Link href={`/list/${name}`}>
        <a>
          <img
            style={wineBottleStyle}
            src="./wineBottleIcon.svg"
            alt="ワインボトル"
          />
        </a>
      </Link>

      <div style={soilStyle}>
        <p>{name}</p>

        <p>{category}</p>

        <p>{taste}</p>

        <p>{producer}</p>

        <p>{home}</p>
      </div>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90;
`;

export default Winebottle;
