import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { dateHeartState, dateState } from "../../../lib/atom";
import React from "react";
import Heart from "../../../assets/heart.svg?react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DateCalendar() {
  const { color, opacity } = useRecoilValue(dateHeartState);
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
          <div key={`date-${date}`} className={"date"}>
            {originDate && date === day && (
              <HeartSVG color={color} opacity={opacity} />
            )}
            {<div className="dateValue">{date}</div>}
          </div>
        )
      )}
    </Container>
  );
}

const HeartSVG = styled(Heart)<{ color: string; opacity: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  z-index: 1;
  opacity: ${(props) => props.opacity};
  & path {
    fill: ${(props) => props.color};
  }
`;

const Container = styled.div`
  font-size: 0.8rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  font-family: "Lora", serif;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .dateValue {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
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
    position: relative;
    height: 30px;
  }
`;
