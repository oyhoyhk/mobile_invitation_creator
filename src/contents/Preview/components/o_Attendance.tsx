import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { attendanceMessageState } from "../../../lib/atom";

const placeholder = `ex) 모든 분들께
부족함 없는 예식을 준비하기 위해
참석 및 식사 여부를
미리 여쭙고자 합니다.
부담 없이 알려주시면
정성껏 준비하겠습니다`;

export default function Attendance() {
  const attendanceMessage = useRecoilValue(attendanceMessageState);

  return (
    <Container>
      <legend>참석의사 전달하기</legend>
      {attendanceMessage ? (
        <p>{attendanceMessage}</p>
      ) : (
        <p className="empty">{placeholder}</p>
      )}
      <Button>참석의사 전달하기</Button>
    </Container>
  );
}

const Button = styled.button`
  border: 1px solid rgba(129, 122, 94, 0.3);
  background: #f5e3e2;
  border-radius: 28px;
  height: 36px;
  width: 274px;
  cursor: pointer;
  margin-top: 25px;
`;

const Container = styled.fieldset`
  width: 85%;
  margin: 0 auto;
  margin-top: var(--margin-top);
  box-sizing: border-box;
  font-size: 0.9rem;

  border-radius: 0.5rem;
  border: 1px solid rgba(129, 122, 94, 0.3);
  padding: 50px 25px;

  & > legend {
    text-align: center;
    padding: 0 15px;
    font-weight: bold;
  }

  & > p {
    white-space: pre-line;
    line-height: 2.2rem;

    &.empty {
      color: var(--gray-color);
    }
  }
`;
