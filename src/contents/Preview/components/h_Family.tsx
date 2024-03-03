import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { familyState, nameState } from "../../../lib/atom";
import React from "react";
import Mum from "../../../assets/mum.svg?react";

export default function Family() {
  const familyInfo = useRecoilValue(familyState);
  const { groom, bride } = useRecoilValue(nameState);

  return (
    <Container>
      <Text>
        {!familyInfo.groom.father.alive ? (
          <Mum />
        ) : (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        )}
        <b
          className={familyInfo.groom.father.name ? "" : "empty"}
          style={{ width: "50px" }}
        >
          {familyInfo.groom.father.name || "신랑 父"}
        </b>
        <span>•</span>
        {!familyInfo.groom.mother.alive ? (
          <Mum />
        ) : (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        )}
        <b
          className={familyInfo.groom.mother.name ? "" : "empty"}
          style={{ width: "50px" }}
        >
          {" "}
          {familyInfo.groom.mother.name || "신랑 母"}
        </b>
        의
        <b
          className={familyInfo.groom.position ? "" : "empty"}
          style={{ width: "46px", textAlign: "left" }}
        >
          {familyInfo.groom.position || "호칭"}
        </b>
        <b className={groom ? "" : "empty"} style={{ width: "58px" }}>
          {" "}
          {groom || "신랑이름"}
        </b>
      </Text>
      <Text>
        {!familyInfo.bride.father.alive ? (
          <Mum />
        ) : (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        )}
        <b
          className={familyInfo.bride.father.name ? "" : "empty"}
          style={{ width: "50px" }}
        >
          {familyInfo.bride.father.name || "신부 父"}
        </b>
        <span>•</span>
        {!familyInfo.bride.mother.alive ? (
          <Mum />
        ) : (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        )}
        <b
          className={familyInfo.bride.mother.name ? "" : "empty"}
          style={{ width: "50px" }}
        >
          {familyInfo.bride.mother.name || "신부 母"}
        </b>
        의{" "}
        <b
          className={familyInfo.bride.position ? "" : "empty"}
          style={{ width: "46px", textAlign: "left" }}
        >
          {familyInfo.bride.position || "호칭"}
        </b>
        <b style={{ width: "58px" }} className={bride ? "" : "empty"}>
          {" "}
          {bride || "신부이름"}
        </b>
      </Text>
    </Container>
  );
}

const Text = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-of-type {
    margin-bottom: 25px;
  }
  & b {
    margin: 0 5px;
    overflow: hidden;
    white-space: nowrap;
    &.empty {
      color: var(--gray-color);
    }
  }

  & span {
    margin: 0 5px;
  }

  & svg {
    width: 15px;
    height: 15px;
  }
`;

const Container = styled.div`
  margin-top: var(--margin-top);
`;
