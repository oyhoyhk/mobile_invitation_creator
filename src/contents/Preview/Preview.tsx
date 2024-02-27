import styled from "@emotion/styled";
import Header from "./components/a_header";
import Name from "./components/b__name";
import ClippedImage from "./components/ClippedImage";
import Info from "./components/c_Info";
import MainPhoto from "./components/e_MainPhoto";
import FirstDescription from "./components/d_FirstDescription";
import SecondDescription from "./components/f_SecondDescription";
import Family from "./components/g_Family";
import TwoPhotos from "./components/h_TwoPhotos";
import DateCalendar from "./components/i_Calendar";
import Gallery from "./components/j_Gallery";
import Location from "./components/k_Location";

export default function Preview() {
  return (
    <Container>
      <Header />
      <Name />
      <ClippedImage />
      <Info />
      <img
        alt="candle"
        src="candle.png"
        style={{
          display: "block",
          margin: "0 auto",
          marginTop: "var(--margin-top",
        }}
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
        Loction
      </div>
      <Location />
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

const Container = styled.div`
  width: 375px;
  height: 100%;
  overflow: auto;
  background: #fbf6ef;

  text-align: center;
  padding-bottom: var(--margin-top);
`;
