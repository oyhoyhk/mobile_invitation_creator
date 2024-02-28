import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { familyState, nameState } from "../../../lib/atom";

export default function Family() {
  const familyInfo = useRecoilValue(familyState);
  const { groom, bride } = useRecoilValue(nameState);

  return (
    <Container>
      <Text>
        {!familyInfo.groom.father.alive && <span>故</span>}
        <b className={familyInfo.groom.father.name ? "" : "empty"}>
          {familyInfo.groom.father.name || "신랑 父"}
        </b>
        •{!familyInfo.groom.mother.alive && <span>故</span>}
        <b className={familyInfo.groom.mother.name ? "" : "empty"}>
          {" "}
          {familyInfo.groom.mother.name || "신랑 母"}
        </b>
        의
        <b className={familyInfo.groom.position ? "" : "empty"}>
          {familyInfo.groom.position || "호칭"}
        </b>
        <b className={groom ? "" : "empty"}> {groom || "신랑이름"}</b>
      </Text>
      <Text>
        {!familyInfo.bride.father.alive && <span>故</span>}
        <b className={familyInfo.bride.father.name ? "" : "empty"}>
          {familyInfo.bride.father.name || "신부 父"}
        </b>
        •{!familyInfo.bride.mother.alive && <span>故</span>}
        <b className={familyInfo.bride.mother.name ? "" : "empty"}>
          {familyInfo.bride.mother.name || "신부 母"}
        </b>
        의{" "}
        <b className={familyInfo.bride.position ? "" : "empty"}>
          {familyInfo.bride.position || "호칭"}
        </b>
        <b className={bride ? "" : "empty"}> {bride || "신부이름"}</b>
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
    margin: 0 5px;

    &.empty {
      color: var(--gray-color);
    }
  }

  & span {
    margin: 0 5px;
  }
`;

const Container = styled.div`
  margin-top: var(--margin-top);
`;
