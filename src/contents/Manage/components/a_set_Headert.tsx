import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { backgroundColorState, buttonColorState } from "../../../lib/atom";
import { SetContainer } from "../../../components/common";

export default function SetHeader() {
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState);
  const [buttonColor, setButtonColor] = useRecoilState(buttonColorState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };
  return (
    <SetContainer style={{ height: "100px", border: "none", display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "20px",
        }}
      >
        <label style={{ fontWeight: "bold" }} htmlFor="backgroundColor">
          배경색 설정
        </label>
        <input
          type="color"
          id="backgroundColor"
          value={backgroundColor}
          onChange={onChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label style={{ fontWeight: "bold" }} htmlFor="buttonColor">
          버튼색 설정
        </label>
        <input
          type="color"
          id="buttonColor"
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
        />
      </div>
    </SetContainer>
  );
}
