import styled from "@emotion/styled";
import Header from "./components/a_header";
import Name from "./components/b__name";
import ClippedImage from "./components/c_ClippedImage";
import Info from "./components/d_Info";
import FirstDescription from "./components/e_FirstDescription";
import MainPhoto from "./components/f_MainPhoto";
import SecondDescription from "./components/g_SecondDescription";
import Family from "./components/h_Family";
import TwoPhotos from "./components/i_TwoPhotos";
import DateCalendar from "./components/j_Calendar";
import Gallery from "./components/k_Gallery";
import Location from "./components/l_Location";
import Transportation from "./components/m_Transportation";
import AccountInfo from "./components/n_AccountInfo";
import Attendance from "./components/o_Attendance";
import GuestBook from "./components/p_GuestBook";
import FinalPhoto from "./components/q_FinalPhoto";
import { StyledButton } from "../../components/common";
import Footer from "./components/r_Footer";
import React from "react";
import Candle from "../../assets/candle.svg?react";
import Pigeon from "../../assets/pigeon.svg?react";
import { useRecoilValue } from "recoil";
import { backgroundColorState } from "../../lib/atom";

export default function Preview() {
  const backgroundColor = useRecoilValue(backgroundColorState);
  return (
    <Container backgroundColor={backgroundColor}>
      <Header />
      <Name />
      <ClippedImage />
      <Info />
      <Candle
        width="81px"
        height="73px"
        style={{ marginTop: "var(--margin-top)" }}
      />
      <FirstDescription />
      <MainPhoto />
      <div
        className="cursive"
        style={{ fontSize: "2.5rem", marginTop: "var(--margin-top)" }}
      >
        Invite you
      </div>
      <div style={{ marginTop: "25px" }}>소중한 분들을 초대합니다</div>
      <SecondDescription />
      <CustomDivider />
      <Family />
      <CustomDivider />
      <TwoPhotos />
      <div
        className="cursive"
        style={{ fontSize: "2.5rem", marginTop: "var(--margin-top)" }}
      >
        Our Day
      </div>
      <DateCalendar />
      <div
        className="cursive"
        style={{ fontSize: "2.5rem", marginTop: "var(--margin-top)" }}
      >
        Gallery
      </div>
      <Gallery />
      <div
        className="cursive"
        style={{ fontSize: "2.5rem", marginTop: "var(--margin-top)" }}
      >
        Location
      </div>
      <Location />
      <Transportation />
      <Pigeon
        width="78px"
        height="48px"
        style={{ marginTop: "var(--margin-top)" }}
      />
      <AccountInfo />
      <Attendance />
      <GuestBook />
      <FinalPhoto />
      <StyledButton>공유하기</StyledButton>
      <Footer />
    </Container>
  );
}

export const CustomDivider = styled.div`
  width: 80%;
  height: 1px;
  background: lightgray;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;

const Container = styled.div<{ backgroundColor: string }>`
  width: 375px;
  background: ${(props) => props.backgroundColor};

  text-align: center;
`;
