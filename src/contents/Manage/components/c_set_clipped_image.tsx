import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { Button } from "@mui/material";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { clippedImageState } from "../../../lib/atom";
import React from "react";

export default function SetClippedImage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useRecoilState(clippedImageState);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result) {
          setImage((prev) => ({ ...prev, image: result, file: selectedImage }));
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  return (
    <SetContainer style={{ marginTop: "5px", border: "none" }}>
      <legend>오프닝 이미지 선택하기</legend>
      <Contents>
        {image.image ? (
          <Image alt="preview" src={image.image.toString()} />
        ) : (
          <NoImage />
        )}
        <Button
          variant="contained"
          sx={{
            height: "50px",
            width: "50px",
            minWidth: "50px",
            borderRadius: "50px",
            position: "absolute",
            bottom: "20px",
            right: "40px",
          }}
          onClick={() => fileRef.current?.click()}
        >
          +
        </Button>
        <input
          onChange={handleImageChange}
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
      </Contents>
    </SetContainer>
  );
}

const Image = styled.img`
  height: 250px;
  margin: 0 auto;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoImage = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid black;
  background-color: white;
  background-image: url("picture.png");
  background-size: 50px 50px;
  background-position: center center;
  background-repeat: no-repeat;
`;
