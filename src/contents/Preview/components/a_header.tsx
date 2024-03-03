import styled from "@emotion/styled";
import React from "react";

export default function Header() {
  return (
    <Container>
      <Bird />
      <Ribbon />
      <Text className="cursive">
        We are getting
        <br />
        Married
      </Text>
    </Container>
  );
}

const Bird = styled.div`
  width: 100%;
  height: 50px;
  background: url("bird.png");
  background-size: cover;
  position: absolute;
  left: 0;
  top: 20px;
`;

const Ribbon = styled.div`
  width: 100%;
  height: 200px;
  background: url("ribbon.png");
  background-size: cover;
  position: absolute;
  left: 0;
  top: 35px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 2.4rem;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 125px;
  transform: translateX(-50%);
`;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 95%;
  height: 240px;
  position: relative;
`;
