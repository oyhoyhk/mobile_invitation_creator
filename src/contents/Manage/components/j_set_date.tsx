import { SetContainer } from "../../../components/common";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "@emotion/styled";
import { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import { dateHeartState, dateState } from "../../../lib/atom";
import React, { useCallback } from "react";

export default function SetDate() {
  const [date, setDate] = useRecoilState(dateState);
  const [colorInfo, setColorInfo] = useRecoilState(dateHeartState);

  const handleDateChange = (value: Dayjs | null) => {
    if (!value) return;
    if (value.toDate() <= new Date()) {
      alert("현재 날짜 이후로 설정해주세요.");
      setDate(null);
      return;
    }
    setDate(value);
  };

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColorInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setColorInfo]
  );

  return (
    <SetContainer
      style={{ marginTop: "25px", padding: "15px 50px", border: "none" }}
    >
      <legend>결혼식 날짜 설정</legend>
      <OptionContainer>
        <div>
          <label htmlFor="dateHeartColor">하트 색상</label>
          <input
            onChange={handleColorChange}
            type="color"
            id="dateHeartColor"
            name="color"
            value={colorInfo.color}
          />
        </div>
        <div>
          <label htmlFor="dateHeartOpacity">하트 투명도</label>
          <input
            onChange={handleColorChange}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={colorInfo.opacity}
            id="dateHeartOpacity"
            name="opacity"
          />
        </div>
      </OptionContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomDatePicker
          name="date"
          sx={{ width: "100%" }}
          value={date}
          onChange={(value) => handleDateChange(value as Dayjs)}
          format="YYYY년 MM월 DD일"
        />
      </LocalizationProvider>
    </SetContainer>
  );
}

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  & label {
    margin-right: 20px;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  & input {
    text-align: center;
  }
`;
