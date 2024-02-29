import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { finalPhotoState } from "../../../lib/atom";

const placeholder = `저희의 새로운 시작을
함께 해주시는 모든 분들께
감사드립니다.`;

export default function FinalPhoto() {
  const { color, text, image, position } = useRecoilValue(finalPhotoState);
  return (
    <Container image={image} position={position}>
      <Cover />
      {text ? (
        <Text style={{ color }}>{text}</Text>
      ) : (
        <Text style={{ color: "var(--gray-color)" }}>{placeholder}</Text>
      )}
    </Container>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Container = styled.div<{
  image: string | ArrayBuffer | null;
  position: string;
}>`
  width: 100%;
  height: 469px;
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
  position: relative;
`;

const Text = styled.p`
  white-space: pre-line;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  line-height: 2.5rem;
  z-index: 2;
`;
