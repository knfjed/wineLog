import React from "react";
import styled from "styled-components";
import Topic from "./Topics";

export default function TopImage() {
  return (
    <div>
      <WineImage src="/topimg-wine.jpg" alt="ワインの写真" />

      <Topic />

      <Arrow src="/arrow.svg" alt="矢印アイコン" />
    </div>
  );
}

const WineImage = styled.img`
  display: flex;
  width: 1000px;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const Arrow = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;
