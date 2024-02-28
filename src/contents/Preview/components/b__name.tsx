import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { nameState } from "../../../lib/atom";

export default function Name() {
  const { groom, bride } = useRecoilValue(nameState);

  return (
    <Container>
      <div>
        <div className="cursive">groom</div>
        <div style={{ width: "70px", height: "30px" }}>{groom}</div>
      </div>
      <Line />
      <div>
        <div className="cursive">bride</div>
        <div style={{ width: "70px", height: "30px" }}>{bride}</div>
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
