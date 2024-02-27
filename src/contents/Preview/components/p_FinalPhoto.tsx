import styled from "@emotion/styled";

export default function FinalPhoto() {
  return (
    <Container img="finalPhoto.png">
      <Cover />
      <Text>{`저희의 새로운 시작을
        함께 해주시는 모든 분들께
        감사드립니다.`}</Text>
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

const Container = styled.div<{ img: string }>`
  margin-top: 50px;
  width: 100%;
  height: 470px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
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
