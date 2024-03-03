import { Button, TextField } from "@mui/material";
import { SetContainer } from "../../../components/common";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { locationState } from "../../../lib/atom";
import React from "react";

export default function SetLocation() {
  const setLocation = useSetRecoilState(locationState);

  const [info, setInfo] = useState({
    address: "",
    detail: "",
    phone: "",
  });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleInfoChange = () => {
    setLocation(info);
  };

  return (
    <SetContainer
      style={{
        marginTop: "150px",
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <legend>결혼식 장소 설정</legend>
      <CustomTextField
        style={{ marginTop: "60px" }}
        label="도로명 주소"
        variant="standard"
        sx={{ width: "100%" }}
        value={info.address}
        name="address"
        onChange={onChange}
      />
      <CustomTextField
        style={{ marginTop: "60px" }}
        label="상세 주소"
        variant="standard"
        sx={{ width: "100%" }}
        value={info.detail}
        name="detail"
        onChange={onChange}
      />

      <CustomTextField
        style={{ marginTop: "60px" }}
        label="전화 번호"
        variant="standard"
        sx={{ width: "100%" }}
        value={info.phone}
        name="phone"
        onChange={onChange}
      />
      <Button
        variant="contained"
        sx={{ width: "90%", height: "50px", marginTop: "60px" }}
        onClick={handleInfoChange}
      >
        설정하기
      </Button>
    </SetContainer>
  );
}

const CustomTextField = styled(TextField)`
  width: 90%;
  & input {
    text-align: center;
  }
`;
