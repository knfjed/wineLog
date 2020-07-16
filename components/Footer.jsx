import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Root>
      <p>{`Copyright ${new Date().getFullYear()} Kana fujieda All Rights Reserved.`}</p>
    </Root>
  );
}

const Root = styled.div`
  text-align: center;
`;
