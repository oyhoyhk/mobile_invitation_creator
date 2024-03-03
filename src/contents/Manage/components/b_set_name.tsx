import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { nameState } from "../../../lib/atom";
import { SetContainer } from "../../../components/common";
import React from "react";

export default function SetName() {
  const [name, setName] = useRecoilState(nameState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) return;
    setName({ ...name, [e.target.name]: e.target.value });
  };
  return (
    <SetContainer style={{ paddingBottom: "30px", border: "none" }}>
      <legend>신랑 / 신부 이름 설정</legend>
      <InputContainer>
        <div>
          <label>신랑</label>
          <TextField
            label="Groom"
            variant="standard"
            name="groom"
            id="groom"
            onChange={onChange}
            value={name.groom}
            sx={{
              width: "250px",
              marginRight: "40px",
            }}
          />
        </div>
        <div>
          <label>신부</label>
          <TextField
            label="Bride"
            variant="standard"
            name="bride"
            id="bride"
            onChange={onChange}
            value={name.bride}
            sx={{ width: "250px" }}
          />
        </div>
      </InputContainer>
    </SetContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > label {
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 15px;
    padding-top: 20px;
  }
`;
