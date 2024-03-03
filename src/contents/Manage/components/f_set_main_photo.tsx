import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { useRecoilState } from "recoil";
import { mainPhotoState } from "../../../lib/atom";
import { Button } from "@mui/material";
import { useRef } from "react";
import React from "react";

export default function SetMainPhoto() {
  const [image, setImage] = useRecoilState(mainPhotoState);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result) {
          setImage((prev) => ({ ...prev, image: result }));
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <SetContainer style={{ marginTop: "25px", border: "none" }}>
      <legend>메인 사진 설정</legend>
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
  height: 420px;
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
  height: 420px;
  border: 2px solid black;
  background-color: white;
  background-image: url("picture.png");
  background-size: 50px 50px;
  background-position: center center;
  background-repeat: no-repeat;
`;
