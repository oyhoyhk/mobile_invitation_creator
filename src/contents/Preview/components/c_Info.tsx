import styled from "@emotion/styled";

export default function Info() {
  return (
    <Container>
      <div>2024년 4월 12일 토요일 오전 11시</div>
      <div>로즈레터 호텔 10층 그랜드홀</div>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;
