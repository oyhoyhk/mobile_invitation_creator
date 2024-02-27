import styled from "@emotion/styled";

export default function Family() {
  return (
    <Container>
      <Text>
        <b>이강재</b>•<b>강혜자</b>의 장남
        <b>이재욱</b>
      </Text>
      <Text>
        <b>김현재</b>•<b>안지영</b>의 장녀
        <b>김희연</b>
      </Text>
    </Container>
  );
}

const Text = styled.div`
  font-size: 0.9rem;
  &:first-of-type {
    margin-bottom: 25px;
  }
  & b {
    margin: 0 10px;
  }
`;

const Container = styled.div`
  margin-top: var(--margin-top);
`;
