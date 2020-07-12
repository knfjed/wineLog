import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Winebottle(mock) {
  console.log(mock);

  return (
    <Root>
      <date>{mock.date}</date>

      <Link href={`/list/${mock.name}`}>
        <a>
          <Img src="./wineBottleIcon.svg" alt="ワインボトル" />
        </a>
      </Link>

      <Div>
        <p>{mock.name}</p>

        <p>{mock.category}</p>

        <p>{mock.taste}</p>

        <p>{mock.producer}</p>

        <p>{mock.home}</p>
      </Div>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90;
`;

const Div = styled.div`
  width: 150;
  height: 200;
  background-color: "burlywood";
  border-radius: 10;
  text-align: "center";
  padding-top: 40;
  font-size: 12;
`;

const Img = styled.div`
  width: 100;
  height: "auto";
  margin-top: 20;
`;

export default Winebottle;
