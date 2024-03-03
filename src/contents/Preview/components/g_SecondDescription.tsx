import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { secondDescriptionState } from "../../../lib/atom";
import React from "react";

export default function SecondDescription() {
  const placeholder = `ex) 2020년 9월 25일
	무더운 날씨를 지나 선선해 지는 날
	처음 만났습니다. 3년이라는 시간을 지나
	이제는 서로에게 하나뿐인 사람이 되려고 합니다.

	그 시작의 자리에
	귀한 걸음으로 저희의 앞날을
	함께 축복해주시면 감사하겠습니다.
	`;

  const secondDescription = useRecoilValue(secondDescriptionState);

  return (
    <Container>
      {secondDescription ? (
        secondDescription
      ) : (
        <span style={{ color: "var(--gray-color)" }}> {placeholder}</span>
      )}
    </Container>
  );
}

const Container = styled.div`
  white-space: pre-line;
  text-align: center;
  margin-top: var(--margin-top);
  line-height: 26px;
  font-size: 14px;
`;
