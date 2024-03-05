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
import SetDate from "./components/j_set_date";
import SetGallery from "./components/k_set_gallery";
import SetLocation from "./components/l_set_location";
import SetTransportation from "./components/m_set_transportation";
import SetAccountInfo from "./components/n_set_account_info";
import SetAttandanceMessage from "./components/o_set_attendance";
import SetFinalPhoto from "./components/q_set_final_photo";
import React from "react";
import SubmitButton from "./components/s_button";

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
      <SetDate />
      <SetGallery />
      <SetLocation />
      <SetTransportation />
      <SetAccountInfo />
      <SetAttandanceMessage />
      <SetFinalPhoto />
      <SubmitButton />
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
