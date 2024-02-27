import styled from "@emotion/styled";

export default function TwoPhotos() {
  return (
    <Container>
      <div />
      <div />
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
    background: gray;
  }
`;
