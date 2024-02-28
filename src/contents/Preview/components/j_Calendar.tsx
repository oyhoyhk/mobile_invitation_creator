import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { dateState } from "../../../lib/atom";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DateCalendar() {
  const originDate = useRecoilValue(dateState);
  const date = originDate?.toDate() ?? new Date();

  // 년도와 월을 추출합니다.
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 해당 월의 첫 날을 구합니다.
  const firstDayOfMonth = new Date(year, month - 1, 1);

  // 해당 월의 일 수를 구합니다.
  const lastDayOfMonth = new Date(year, month, 0);
  const numberOfDaysInMonth = lastDayOfMonth.getDate();

  // 첫 날의 요일을 구합니다.
  const firstDayOfWeekIndex = firstDayOfMonth.getDay();

  // 첫 날 이전의 공백을 채워주기 위해 빈 요소를 생성합니다.
  const emptyDays = [...Array(firstDayOfWeekIndex).keys()];

  return (
    <Container>
      {days.map((day) => (
        <div key={day} className="dayName">
          {day}
        </div>
      ))}
      {emptyDays.map((_, index) => (
        <div key={`empty-${index}`} className="empty"></div>
      ))}
      {Array.from({ length: numberOfDaysInMonth }, (_, index) => index + 1).map(
        (date) => (
          <div
            key={`date-${date}`}
            className={originDate && date === day ? "wedding date" : "date"}
          >
            {date}
          </div>
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  font-size: 0.8rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .dayName {
    color: #a4a4a4;
  }

  & > .empty {
    /* 빈 공간을 표현하기 위한 스타일 */
    visibility: hidden;
  }

  & > .date {
    /* 날짜를 표현하기 위한 스타일 */
    padding: 5px;
  }

  & > .wedding {
    background-image: url("heart.png");
    background-size: 25px 25px;
    background-position: center 5px;
    background-repeat: no-repeat;
  }
`;
