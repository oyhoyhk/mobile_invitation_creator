import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { useRecoilState } from "recoil";
import { infoState } from "../../../lib/atom";
import { TextField } from "@mui/material";

export default function SetInfo() {
  const [info, setInfo] = useRecoilState(infoState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <SetContainer style={{ marginTop: "30px", border: "none" }}>
      <legend>시간 • 장소 설정</legend>
      <InputContainer>
        <div>
          <label htmlFor="time">시간</label>
          <TextField
            variant="standard"
            name="time"
            id="time"
            onChange={onChange}
            value={info.time}
            sx={{ width: "90%" }}
            placeholder="ex) 2024년 4월 12일 토요일 오전 11시"
          />
        </div>
        <div>
          <label htmlFor="location">장소</label>
          <TextField
            variant="standard"
            name="location"
            id="location"
            onChange={onChange}
            value={info.location}
            sx={{ width: "90%" }}
            placeholder="ex) 로즈레터 호텔 10층 그랜드홀."
          />
        </div>
      </InputContainer>
    </SetContainer>
  );
}

const InputContainer = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  & > div > label {
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 15px;
  }

  & input {
    padding-left: 5px;
  }
`;
