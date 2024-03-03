import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { backgroundColorState } from "../../../lib/atom";
import { SetContainer } from "../../../components/common";

export default function SetHeader() {
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };
  return (
    <SetContainer style={{ height: "100px", border: "none" }}>
      <legend>
        <label htmlFor="backgroundColor">배경색 설정</label>
      </legend>
      <input
        style={{ marginLeft: "50px" }}
        type="color"
        id="backgroundColor"
        value={backgroundColor}
        onChange={onChange}
      />
    </SetContainer>
  );
}
