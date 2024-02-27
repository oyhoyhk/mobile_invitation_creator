import styled from "@emotion/styled";

export default function Name() {
  return (
    <Container>
      <div>
        <div className="cursive">groom</div>
        <div>이재욱</div>
      </div>
      <Line />
      <div>
        <div className="cursive">bride</div>
        <div>김희연</div>
      </div>
    </Container>
  );
}

const Line = styled.div`
  height: 35px;
  width: 1px;
  background: black;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.25rem;

  & div {
    text-align: center;
  }
`;
