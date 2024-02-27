import styled from "@emotion/styled";

export default function ClippedImage() {
  return (
    <Container>
      <Wedding />
      <ClipMask />
    </Container>
  );
}

const Wedding = styled.div`
  width: 100%;
  height: 100%;
  background: url("wedding.jpeg");
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background-position: 50% 50%;
`;

const ClipMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: url("clip.png");
  background-size: 100% 100%;
`;

const Container = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;
