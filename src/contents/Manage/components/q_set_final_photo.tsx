import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { finalPhotoState } from "../../../lib/atom";
import { Button } from "@mui/material";

const placeholder = `ex) 저희의 새로운 시작을
함께 해주시는 모든 분들께
감사드립니다.`;

export default function SetFinalPhoto() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [finalPhoto, setFinalPhoto] = useRecoilState(finalPhotoState);
  const [height, setHeight] = useState(3);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result) {
          setFinalPhoto((prev) => ({ ...prev, image: result }));
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFinalPhoto((prev) => ({ ...prev, text: e.target.value }));
    if (e.target.value === "") {
      setHeight(() => 3);
    } else {
      setHeight(() => e.target.value.split("\n").length);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinalPhoto((prev) => ({ ...prev, color: e.target.value }));
  };

  return (
    <SetContainer
      style={{
        marginTop: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <legend>최종 사진 설정</legend>
      <ColorContainer>
        <label htmlFor="finalColor">문구 글자 색상</label>
        <input
          type="color"
          id="finalColor"
          value={finalPhoto.color}
          onChange={handleColorChange}
        />
      </ColorContainer>
      <TextArea
        style={{ height: `${height * 36 + 15}px` }}
        value={finalPhoto.text}
        onChange={handleTextChange}
        placeholder={placeholder}
      />
      <Contents>
        {finalPhoto.image ? (
          <Image alt="preview" src={finalPhoto.image.toString()} />
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

const ColorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & > label {
    margin-right: 15px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--gray-color);
  resize: none;
  text-align: center;
  line-height: 2.5rem;
  font-size: 1rem;

  margin: 25px;
`;

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
