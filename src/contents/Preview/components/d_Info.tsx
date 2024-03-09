import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { infoState } from "../../../lib/atom";
import React from "react";

export default function Info() {
  const { time, location } = useRecoilValue(infoState);
  return (
    <Container>
      {time ? (
        <div>{time}</div>
      ) : (
        <div style={{ color: "var(--gray-color)" }}>
          {" "}
          시간 정보를 입력해주세요
        </div>
      )}
      {location ? (
        <div>{location}</div>
      ) : (
        <div style={{ color: "var(--gray-color)" }}>
          {" "}
          장소 정보를 입력해주세요
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;
