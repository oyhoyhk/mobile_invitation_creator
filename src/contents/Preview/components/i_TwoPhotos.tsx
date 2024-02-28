import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { twoPhotoState } from "../../../lib/atom";

export default function TwoPhotos() {
  const images = useRecoilValue(twoPhotoState);
  return (
    <Container>
      {images.map((image, index) =>
        image.image ? (
          <Image
            key={index}
            img={image.image.toString()}
            position={image.position}
          />
        ) : (
          <div key={index} className="empty" />
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: var(--margin-top);
  width: 90%;
  height: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 48%;
    border-radius: 0.5rem;
    height: 100%;
    background-size: 100;
  }

  & > .empty {
    border: 1px solid var(--gray-color);
    background-color: white;
    background-image: url("picture.png");
    background-size: 50px 50px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Image = styled.div<{ img: string; position: string }>`
  height: 100%;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
`;
