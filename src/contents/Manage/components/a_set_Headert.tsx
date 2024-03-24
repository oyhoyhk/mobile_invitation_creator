import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import {
  backgroundColorState,
  buttonColorState,
  topImageState,
  topLabelState,
} from "../../../lib/atom";
import { SetContainer } from "../../../components/common";

export default function SetHeader() {
  const [backgroundColor, setBackgroundColor] =
    useRecoilState(backgroundColorState);
  const [buttonColor, setButtonColor] = useRecoilState(buttonColorState);
  const [topLabel, setTopLabel] = useRecoilState(topLabelState);
  const [topImage, setTopImage] = useRecoilState(topImageState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleTopLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result) {
          setTopLabel(() => ({ image: result as string, file: selectedImage }));
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleTopImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result) {
          setTopImage(() => ({ image: result as string, file: selectedImage }));
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  return (
    <SetContainer
      style={{
        height: "100px",
        border: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label style={{ fontWeight: "bold" }} htmlFor="topLabel">
          상단 라벨(비둘기)
        </label>
        <input
          onChange={handleTopLabelChange}
          type="file"
          id="topLabel"
          style={{ width: "135px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "135px",
        }}
      >
        <label style={{ fontWeight: "bold" }} htmlFor="topImage">
          상단 이미지(리본)
        </label>
        <input
          onChange={handleTopImageChange}
          type="file"
          id="topImage"
          style={{ width: "135px" }}
        />
      </div>
    </SetContainer>
  );
}
