import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { nameState } from "../../../lib/atom";
import React from "react";

export default function Name() {
  const { groom, bride } = useRecoilValue(nameState);

  return (
    <Container>
      <div>
        <Block
          className="cursive"
          style={{ fontSize: "14px", marginLeft: "10px" }}
        >
          groom
        </Block>
        <Block
          style={{
            width: "100px",
            height: "30px",
            letterSpacing: "5px",
            fontSize: "16px",
          }}
        >
          {groom}
        </Block>
      </div>
      <Line />
      <div>
        <Block
          className="cursive"
          style={{ fontSize: "14px", letterSpacing: "-0.3px" }}
        >
          bride
        </Block>
        <Block
          style={{
            width: "100px",
            height: "30px",
            letterSpacing: "5px",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {bride}
        </Block>
      </div>
    </Container>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  height: 35px;
  width: 1px;
  background: black;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.25rem;

  & div {
    text-align: center;
  }
`;
