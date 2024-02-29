import { useRecoilState } from "recoil";
import { SetContainer } from "../../../components/common";
import { attendanceMessageState } from "../../../lib/atom";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";

const placeholder = `ex) 모든 분들께
부족함 없는 예식을 준비하기 위해
참석 및 식사 여부를
미리 여쭙고자 합니다.
부담 없이 알려주시면
정성껏 준비하겠습니다.`;

export default function SetAttandanceMessage() {
  const [attandance, setAttandance] = useRecoilState(attendanceMessageState);
  const [height, setHeight] = useState(6);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAttandance(e.target.value);
      if (e.target.value === "") {
        setHeight(() => 6);
      } else {
        setHeight(() => e.target.value.split("\n").length);
      }
    },
    [setAttandance]
  );

  return (
    <SetContainer
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "25px",
      }}
    >
      <legend>참석 의사 문구 설정</legend>
      <TextArea
        placeholder={placeholder}
        style={{ height: `${height * 36 + 15}px` }}
        value={attandance}
        onChange={onChange}
      />
    </SetContainer>
  );
}

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  line-height: 2.2rem;
`;
