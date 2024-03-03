import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { secondDescriptionState } from "../../../lib/atom";
import React from "react";

export default function SetSecondDescription() {
  const [height, setHeight] = useState(8);
  const [secondDescription, setSecondDescription] = useRecoilState(
    secondDescriptionState
  );
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSecondDescription(e.target.value);
    const count = e.target.value.split("\n").length;

    if (!e.target.value) setHeight(8);
    else setHeight(count);
  };
  const placeholder = `ex) 2020년 9월 25일
  무더운 날씨를 지나 선선해 지는 날
  처음 만났습니다. 3년이라는 시간을 지나
  이제는 서로에게 하나뿐인 사람이 되려고 합니다.

  그 시작의 자리에
  귀한 걸음으로 저희의 앞날을
  함께 축복해주시면 감사하겠습니다.
  `;
  return (
    <SetContainer style={{ marginTop: "90px", paddingBottom: "40px" }}>
      <legend>초대 문구 설정</legend>
      <TextArea
        style={{ height: `${50 + height * 25}px` }}
        placeholder={placeholder}
        value={secondDescription}
        onChange={onChange}
      />
    </SetContainer>
  );
}

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  line-height: 26px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  overflow: hidden;

  &::placeholder {
    text-align: center;
    font-size: 1rem;
    line-height: 26px;
  }
`;
