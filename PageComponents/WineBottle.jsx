import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Winebottle({ id, date, name, category, producer }) {
  return (
    <Root>
      <Date>{date}</Date>

      <Link href={`/stock/${id}`}>
        <a>
          <WineBottleImage src="/wineBottleIcon.svg" alt="ワインボトル" />
        </a>
      </Link>

      <Attributes>
        <Text>
          <p>{name}</p>
          <p>{category}</p>
          <p>{producer}</p>
        </Text>
      </Attributes>
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
  width: 140px;
  height: 180px;
  padding-top: 30px;
  background-color: burlywood;
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
`;

const WineBottleImage = styled.img`
  margin-bottom: -10px;
  width: 100px;
  height: auto;
  margin-top: 20;
`;

const Date = styled.div`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
`;
