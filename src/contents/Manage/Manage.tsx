import styled from "@emotion/styled";
import SetHeader from "./components/a_set_Headert";
import SetName from "./components/b_set_name";
import SetClippedImage from "./components/c_set_clipped_image";
import SetInfo from "./components/d_set_info";
import SetFirstDescription from "./components/e_set_first_description";
import SetMainPhoto from "./components/f_set_main_photo";
import SetSecondDescription from "./components/g_set_second_description";
import SetFamily from "./components/h_set_family";
import SetTwoPhotos from "./components/i_set_two_photos";

export default function Manage() {
  return (
    <Container>
      <h1 style={{ paddingLeft: "20px" }}>Mobile Invitation Settings</h1>
      <SetHeader />
      <SetName />
      <SetClippedImage />
      <SetInfo />
      <SetFirstDescription />
      <SetMainPhoto />
      <SetSecondDescription />
      <SetFamily />
      <SetTwoPhotos />
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  background: white;
  color: black;
  margin-left: 5px;
  font-family: Inter;
  padding-top: var(--margin-top);
`;
