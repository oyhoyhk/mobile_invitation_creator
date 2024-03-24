import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import {
  accountInfoState,
  attendanceMessageState,
  backgroundColorState,
  buttonColorState,
  clippedImageState,
  dateHeartState,
  dateState,
  familyState,
  finalPhotoState,
  firstDescriptionState,
  galleryListState,
  infoState,
  latlngState,
  locationState,
  mainPhotoState,
  nameState,
  secondDescriptionState,
  topImageState,
  topLabelState,
  transportationState,
  twoPhotoState,
} from "../../../lib/atom";
import axios from "axios";
import dayjs from "dayjs";

export default function SubmitButton() {
  const [id, setId] = useState<string | null>(null);
  const themeColor = useRecoilValue(backgroundColorState);
  const buttonColor = useRecoilValue(buttonColorState);
  const topLabel = useRecoilValue(topLabelState);
  const topImage = useRecoilValue(topImageState);
  const name = useRecoilValue(nameState);
  const weddingInfo = useRecoilValue(infoState);
  const firstDescription = useRecoilValue(firstDescriptionState);
  const secondDescription = useRecoilValue(secondDescriptionState);
  const familyInfo = useRecoilValue(familyState);
  const date = useRecoilValue(dateState);
  const locationInfo = useRecoilValue(locationState);
  const latlng = useRecoilValue(latlngState);
  const transportInfo = useRecoilValue(transportationState);
  const accountInfo = useRecoilValue(accountInfoState);
  const attendanceMessage = useRecoilValue(attendanceMessageState);

  const clippedImage = useRecoilValue(clippedImageState);
  const mainPhoto = useRecoilValue(mainPhotoState);
  const twoPhotos = useRecoilValue(twoPhotoState);
  const gallery = useRecoilValue(galleryListState);
  const finalPhoto = useRecoilValue(finalPhotoState);
  const heartColor = useRecoilValue(dateHeartState);

  useEffect(() => {}, []);

  const onSubmit = async () => {
    const { data: id } = await axios.get(
      import.meta.env.VITE_SERVER_URL + "/api/key"
    );
    if (!id) {
      alert("청첩장 생성에 실패했습니다. - 서버 오류");
      return;
    }
    const formData = new FormData();
    formData.append("id", id);
    formData.append("topLabel", topLabel.file as Blob);
    formData.append("topImage", topImage.file as Blob);
    formData.append("themeColor", themeColor);
    formData.append("buttonColor", buttonColor);
    formData.append("name", JSON.stringify(name));
    formData.append("weddingInfo", JSON.stringify(weddingInfo));
    formData.append("firstDescription", firstDescription);
    formData.append("secondDescription", secondDescription);
    formData.append("familyInfo", JSON.stringify(familyInfo));
    formData.append("heartInfo", JSON.stringify(heartColor));
    formData.append("date", (date as dayjs.Dayjs).toDate().toString());
    formData.append(
      "locationInfo",
      JSON.stringify({ ...locationInfo, ...latlng })
    );
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
    formData.append("finalPhoto", finalPhoto.file as Blob);
    formData.append("finalPhotoColor", finalPhoto.color);
    formData.append("finalPhotoText", finalPhoto.text);

    try {
      await axios.post(
        import.meta.env.VITE_SERVER_URL + "/api/wedding",
        formData
      );
      alert("청첩장이 생성되었습니다.");
    } catch (e) {
      alert("청첩장 생성에 실패했습니다. - 서버 오류");
    }
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
