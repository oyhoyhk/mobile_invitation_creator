import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { familyState, nameState } from "../../../lib/atom";
import React from "react";
import Mum from "../../../assets/mum.svg?react";

export default function Family() {
  const familyInfo = useRecoilValue(familyState);
  const { groom, bride } = useRecoilValue(nameState);
  const maxLength = Math.max(
    familyInfo.bride.father.name.length,
    familyInfo.bride.mother.name.length,
    familyInfo.groom.father.name.length,
    familyInfo.groom.mother.name.length
  );

  return (
    <Container>
      <Text>
        {!familyInfo.groom.father.alive ? (
          <Mum />
        ) : !familyInfo.groom.father.alive || !familyInfo.bride.father.alive ? (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        ) : (
          ""
        )}
        <b
          className={familyInfo.groom.father.name ? "" : "empty"}
          style={{ width: maxLength * 15 + "px", textAlign: "right" }}
        >
          {familyInfo.groom.father.name || "신랑 父"}
        </b>
        <span>•</span>
        {!familyInfo.groom.mother.alive ? (
          <Mum />
        ) : !familyInfo.groom.mother.alive || !familyInfo.bride.mother.alive ? (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        ) : (
          ""
        )}
        <b
          className={familyInfo.groom.mother.name ? "" : "empty"}
          style={{ width: maxLength * 15 + "px", textAlign: "right" }}
        >
          {" "}
          {familyInfo.groom.mother.name || "신랑 母"}
        </b>
        <span style={{ fontSize: "12px" }}>의</span>
        <b
          className={familyInfo.groom.position ? "" : "empty"}
          style={{ width: "30px", textAlign: "left" }}
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
        ) : !familyInfo.bride.father.alive || !familyInfo.groom.father.alive ? (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        ) : (
          ""
        )}
        <b
          className={familyInfo.bride.father.name ? "" : "empty"}
          style={{ width: maxLength * 15 + "px", textAlign: "right" }}
        >
          {familyInfo.bride.father.name || "신부 父"}
        </b>
        <span>•</span>
        {!familyInfo.bride.mother.alive ? (
          <Mum />
        ) : !familyInfo.bride.mother.alive || !familyInfo.groom.mother.alive ? (
          <span style={{ width: "15px", height: "15px", margin: 0 }} />
        ) : (
          ""
        )}
        <b
          className={familyInfo.bride.mother.name ? "" : "empty"}
          style={{ width: maxLength * 15 + "px", textAlign: "right" }}
        >
          {familyInfo.bride.mother.name || "신부 母"}
        </b>
        <span style={{ fontSize: "12px" }}>의</span>
        <b
          className={familyInfo.bride.position ? "" : "empty"}
          style={{ width: "30px", textAlign: "left" }}
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
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-of-type {
    margin-bottom: 25px;
  }
  & b {
    margin: 0;
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
