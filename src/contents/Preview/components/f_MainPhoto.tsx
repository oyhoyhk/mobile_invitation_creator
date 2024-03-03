import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { mainPhotoState } from "../../../lib/atom";
import React from "react";

export default function MainPhoto() {
  const { image, position } = useRecoilValue(mainPhotoState);
  return <Container image={image} position={position} />;
}

const Container = styled.div<{
  image: string | ArrayBuffer | null;
  position: string;
}>`
  width: 100%;
  height: 469px;
  background-color: white;
  background-image: ${(props) =>
    props.image ? `url(${props.image.toString()})` : `url(picture.png)`};
  ${(props) =>
    props.image ? "background-size:100% auto" : "background-size: 50px 50px"};
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.image ? props.position : `center center`};
  ${(props) => !props.image && "border-top: 1px solid var(--gray-color);"}
  ${(props) => !props.image && "border-bottom: 1px solid var(--gray-color);"}
  margin-top: var(--margin-top);
`;
