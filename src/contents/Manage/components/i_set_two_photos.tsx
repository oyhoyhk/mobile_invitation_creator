import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { Button } from "@mui/material";
import { useRef } from "react";
import { twoPhotoState } from "../../../lib/atom";
import { useRecoilState } from "recoil";

export default function SetTwoPhotos() {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const [images, setImages] = useRecoilState(twoPhotoState);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (result) {
          setImages((prev) => {
            const newImages = [...prev];
            newImages[index] = { ...newImages[index], image: result };
            return newImages;
          });
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <SetContainer style={{ border: "none" }}>
      <legend>서브 사진 설정</legend>
      <ContentsContainer>
        {images.map((image, index) => (
          <Contents key={index}>
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
              onClick={() => refs.current[index]?.click()}
            >
              +
            </Button>
            <input
              onChange={(e) => handleImageChange(e, index)}
              ref={(el) => (refs.current[index] = el)}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </Contents>
        ))}
      </ContentsContainer>
    </SetContainer>
  );
}

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  max-height: 300px;
  max-: 100%;
  margin: 0 auto;
`;

const Contents = styled.div`
  width: 47%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NoImage = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid black;
  background-color: white;
  background-image: url("picture.png");
  background-size: 50px 50px;
  background-position: center center;
  background-repeat: no-repeat;
`;
