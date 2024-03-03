import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { firstDescriptionState } from "../../../lib/atom";
import { SetContainer } from "../../../components/common";
import { useState } from "react";
import React from "react";

export default function SetFirstDescription() {
  const [height, setHeight] = useState(4);
  const [firstDescription, setFirstDescription] = useRecoilState(
    firstDescriptionState
  );
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFirstDescription(e.target.value);
    const count = e.target.value.split("\n").length;

    if (count <= 1) setHeight(4);
    else setHeight(count);
  };
  const placeholder = `ex) 이제는 서로가 서로에게
  행복을 주는 사람이 되겠습니다.
  아름다운 사랑으로 날개를 펴는 저희에게
  축복과 격려 부탁드립니다.`;

  return (
    <SetContainer style={{ marginTop: "40px" }}>
      <legend>인사말 설정</legend>
      <TextArea
        onChange={onChange}
        value={firstDescription}
        placeholder={placeholder}
        style={{ height: `${height * 48}px` }}
      />
    </SetContainer>
  );
}

const TextArea = styled.textarea`
  text-align: center;
  padding: 20px;
  width: 100%;
  line-height: 26px;
  font-size: 1rem;
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    text-align: center;
    font-size: 1rem;
  }
`;
