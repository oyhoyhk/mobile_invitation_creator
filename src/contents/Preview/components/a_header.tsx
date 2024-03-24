import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import { topImageState, topLabelState } from "../../../lib/atom";

export default function Header() {
  const topLabel = useRecoilValue(topLabelState);
  const topImage = useRecoilValue(topImageState);

  return (
    <Container>
      {topLabel.image && <TopLabel image={topLabel.image} />}
      {topImage.image && <TopImage image={topImage.image} />}
      <Text className="cursive" style={{ left: "83px", top: "108px" }}>
        We are getting
      </Text>
      <Text
        className="cursive"
        style={{ left: "122px", top: "144px", width: "123px" }}
      >
        Married
      </Text>
    </Container>
  );
}

const TopLabel = styled.div<{ image: string }>`
  width: 339px;
  height: 52px;
  background: url(${(props) => props.image});
  background-size: cover;
  position: absolute;
  left: 50%;
  top: 17px;
  transform: translateX(-50%);
`;

const TopImage = styled.div<{ image: string }>`
  width: 342px;
  height: 193px;
  background: url(${(props) => props.image});
  background-size: cover;
  position: absolute;
  left: 50%;
  top: 27px;
  transform: translateX(-50%);
`;

const Text = styled.div`
  text-align: center;
  font-size: 40px;
  position: absolute;
  width: 209px;
  height: 86px;
  left: 83px;
  top: 108px;
  line-height: 50px;
  letter-spacing: -0.3px;
  font-weight: 500;
  white-space: nowrap;
  font-style: italic;
`;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 95%;
  height: 210px;
  position: relative;
`;
