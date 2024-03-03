import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { firstDescriptionState } from "../../../lib/atom";
import React from "react";

export default function FirstDescription() {
  const firstDescription = useRecoilValue(firstDescriptionState);
  const placeholder = `ex) 이제는 서로가 서로에게
  행복을 주는 사람이 되겠습니다.
  아름다운 사랑으로 날개를 펴는 저희에게
  축복과 격려 부탁드립니다.`;

  return (
    <Container>
      {firstDescription ? (
        firstDescription
      ) : (
        <span style={{ color: "var(--gray-color)" }}>{placeholder}</span>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 25px;
  text-align: center;
  line-height: 26px;
  white-space: pre-line;
  font-size: 14px;
`;
