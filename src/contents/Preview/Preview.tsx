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

export default function Preview() {
  return (
    <Container>
      <Header />
      <Name />
      <ClippedImage />
      <Info />
      <Image alt="candle" src="candle.png" />
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
      <Image alt="pigeon" src="pigeon.png" />
      <AccountInfo />
      <Attendance />
      <GuestBook />
      <FinalPhoto />
      <StyledButton>공유하기</StyledButton>
      <Footer />
    </Container>
  );
}

const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;

export const CustomDivider = styled.div`
  width: 80%;
  height: 1px;
  background: lightgray;
  margin: 0 auto;
  margin-top: var(--margin-top);
`;

const Container = styled.div`
  width: 375px;
  background: #fbf6ef;

  text-align: center;
`;
