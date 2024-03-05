import React from "react";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import {
  accountInfoState,
  attendanceMessageState,
  clippedImageState,
  dateState,
  familyState,
  finalPhotoState,
  firstDescriptionState,
  galleryListState,
  infoState,
  locationState,
  mainPhotoState,
  nameState,
  secondDescriptionState,
  transportationState,
  twoPhotoState,
} from "../../../lib/atom";
import axios from "axios";
import dayjs from "dayjs";

export default function SubmitButton() {
  const id = new Date().getTime();
  const name = useRecoilValue(nameState);
  const weddingInfo = useRecoilValue(infoState);
  const firstDescription = useRecoilValue(firstDescriptionState);
  const secondDescription = useRecoilValue(secondDescriptionState);
  const familyInfo = useRecoilValue(familyState);
  const date = useRecoilValue(dateState);
  const locationInfo = useRecoilValue(locationState);
  const transportInfo = useRecoilValue(transportationState);
  const accountInfo = useRecoilValue(accountInfoState);
  const attendanceMessage = useRecoilValue(attendanceMessageState);

  const clippedImage = useRecoilValue(clippedImageState);
  const mainPhoto = useRecoilValue(mainPhotoState);
  const twoPhotos = useRecoilValue(twoPhotoState);
  const gallery = useRecoilValue(galleryListState);
  const finalPhoto = useRecoilValue(finalPhotoState);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("id", id.toString());
    formData.append("name", JSON.stringify(name));
    formData.append("weddingInfo", JSON.stringify(weddingInfo));
    formData.append("firstDescription", firstDescription);
    formData.append("secondDescription", secondDescription);
    formData.append("familyInfo", JSON.stringify(familyInfo));
    formData.append("date", (date as dayjs.Dayjs).toDate().toString());
    formData.append("locationInfo", JSON.stringify(locationInfo));
    formData.append("transportInfo", JSON.stringify(transportInfo));
    formData.append("accountInfo", JSON.stringify(accountInfo));
    formData.append("attendanceMessage", attendanceMessage);
    formData.append("clippedImage", clippedImage.file as Blob);
    formData.append("mainPhoto", mainPhoto.file as Blob);
    twoPhotos.forEach((file) => {
      formData.append("twoPhoto", file.file as Blob);
    });

    gallery.forEach((file) => {
      formData.append("gallery", file);
    });

    axios.post(import.meta.env.VITE_SERVER_URL + "/api/wedding", formData);
  };
  return (
    <Button
      variant="contained"
      sx={{
        width: "500px",
        height: "60px",
        fontSize: "1.5rem",
        margin: "20px auto",
        display: "block",
        marginTop: "200px",
        marginBottom: "60px",
      }}
      onClick={onSubmit}
    >
      청첩장 생성하기
    </Button>
  );
}