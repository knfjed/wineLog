import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Info from "../../PageComponents/Info";

export default function Winebottle(
  {
    // id,
    // date,
    // name,
    // category,
    // producer,
    // productionArea,
  }
) {
  return (
    <Root>
      <date>{date}</date>

      <Link href={`/stock/${id}`}>
        <a>
          <WineBottleImage src="./wineBottleIcon.svg" alt="ワインボトル" />
        </a>
      </Link>

      {/* <Attributes>
        <p>{name}</p>
        <p>{category}</p>
        <p>{producer}</p>
        <p>{productionArea}</p>
      </Attributes> */}
      <Info />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`;

const Attributes = styled.div`
  width: 150px;
  height: 200px;
  background-color: burlywood;
  border-radius: 10px;
  text-align: center;
  padding-top: 40px;
  font-size: 12px;
`;

const WineBottleImage = styled.img`
  width: 100;
  height: auto;
  margin-top: 20;
`;
