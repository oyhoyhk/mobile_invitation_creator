import { SetContainer } from "../../../components/common";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "@emotion/styled";
import { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import { dateState } from "../../../lib/atom";

export default function SetDate() {
  const [date, setDate] = useRecoilState(dateState);
  const handleDateChange = (value: Dayjs | null) => {
    if (!value) return;
    if (value.toDate() <= new Date()) {
      alert("현재 날짜 이후로 설정해주세요.");
      setDate(null);
      return;
    }
    setDate(value);
  };
  return (
    <SetContainer
      style={{ marginTop: "25px", padding: "50px", border: "none" }}
    >
      <legend>결혼식 날짜 설정</legend>
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

const CustomDatePicker = styled(DatePicker)`
  & input {
    text-align: center;
  }
`;
