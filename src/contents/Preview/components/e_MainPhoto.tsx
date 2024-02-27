import styled from "@emotion/styled";

export default function MainPhoto() {
  return <Container />;
}

const Container = styled.div`
  width: 100%;
  height: 469px;
  background-image: url("wedding.jpeg");
  background-size: cover;
  background-position: center center;
  margin-top: var(--margin-top);
`;
