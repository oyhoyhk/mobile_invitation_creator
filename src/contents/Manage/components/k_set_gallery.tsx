/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetContainer } from "../../../components/common";
import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { galleryListState } from "../../../lib/atom";

export default function SetGallery() {
  const [list, setList] = useRecoilState(galleryListState);
  const fileRef = React.useRef<HTMLInputElement>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      alert("이미지를 선택해주세요.");
      return;
    }

    if (e.target.files.length > 16) {
      alert("이미지는 최대 16개까지 등록 가능합니다.");
      return;
    }

    setList((prev) => [...prev, ...Array.from(e.target.files as FileList)]);
  };

  const handleDeleteImage = (id: number) => {
    setList(list.filter((_, index) => index !== id));
  };

  return (
    <SetContainer style={{ marginTop: "50px", height: "530px" }}>
      <legend style={{ display: "flex", alignItems: "center" }}>
        갤러리 설정{" "}
        {list.length > 0 && (
          <span
            style={{
              fontSize: "18px",
              fontWeight: "normal",
              marginLeft: "15px",
            }}
          >
            - {list.length}개 선택됨
          </span>
        )}
      </legend>
      <Contents>
        {list.length > 0 ? (
          <ImageContainer>
            {list
              .filter((_, idx) => idx % 2 === 0)
              .map((file, idx) => (
                <PreviewImage
                  key={idx}
                  idx={idx}
                  url={URL.createObjectURL(file)}
                  onDelete={handleDeleteImage}
                />
              ))}
            {list
              .filter((_, idx) => idx % 2 === 1)
              .map((file, idx) => (
                <PreviewImage
                  key={idx}
                  idx={idx}
                  url={URL.createObjectURL(file)}
                  onDelete={handleDeleteImage}
                />
              ))}
          </ImageContainer>
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
            bottom: "40px",
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
          multiple
          style={{ display: "none" }}
        />
      </Contents>
    </SetContainer>
  );
}

function PreviewImage({
  url,
  idx,
  onDelete,
}: {
  url: string;
  idx: number;
  onDelete: (id: number) => void;
}) {
  return (
    <PreviewContainer>
      <img alt="preview" src={url} />
      <Button
        variant="contained"
        color="error"
        onClick={() => onDelete(idx)}
        sx={{
          position: "absolute",
          right: "5px",
          top: "5px",
          minWidth: "20px",
          width: "20px",
          height: "20px",
          minHeight: "20px",
          padding: 0,
        }}
      >
        ×
      </Button>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  margin-bottom: 15px;
  margin-right: 15px;
  position: relative;
  & > img {
    height: 150px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoImage = styled.div`
  width: 100%;
  height: 460px;
  background-color: white;
  background-image: url("picture.png");
  background-size: 50px 50px;
  background-position: center center;
  background-repeat: no-repeat;
`;
