import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { clippedImageState } from "../../../lib/atom";
import React from "react";
import Heart from "../../../assets/heart.svg?react";

export default function ClippedImage() {
  const clippedImage = useRecoilValue(clippedImageState);
  return (
    <Container>
      {clippedImage.image ? (
        <Image img={clippedImage.image} position={clippedImage.position} />
      ) : (
        <NoImage />
      )}
      <ClipMask color="red" />
    </Container>
  );
}

const NoImage = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  background-image: url("picture.png");
  background-size: 50px 50px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const Image = styled.div<{ img: string | ArrayBuffer; position: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img.toString()});
  background-position: ${(props) => props.position};
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const ClipMask = styled(Heart)<{ color: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  & rect {
  }
`;

const Container = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;
