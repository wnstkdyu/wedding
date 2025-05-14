import React from "react";
import { Divider, Button } from "antd";
import Calendar from "react-calendar";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import HighlightTitle from "../../common-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .calendar-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #424242;
  }

  .react-calendar {
    border: none;
    background: transparent;
    font-family: 'Helvetica Neue', sans-serif;
  }

  .react-calendar__navigation {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    color: #757575;
    margin-bottom: 4px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__tile {
    background: none;
    border: none;
    padding: 0.6rem 0 0.2rem;
    font-size: 0.85rem;
    color: #424242;
    position: relative;
  }

  .react-calendar__tile--now {
    background: none;
    font-weight: normal;
  }

  .bold-day {
    font-weight: bold;
    color:rgb(218, 136, 176);
  }

  .add-button {
    margin-top: 24px;
  }
`;

const CalendarComponent = () => {
  const weddingDate = new Date(2025, 8, 21); // 9월 21일

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0 }} plain>
        <HighlightTitle>날짜</HighlightTitle>
      </Divider>
      <CalendarWrapper>
        <div className="calendar-title">9월</div>
        <Calendar
          value={weddingDate}
          calendarType="gregory"
          locale="en-US"
          showNavigation={false}
          activeStartDate={new Date(2025, 8, 1)} // 9월 고정
          maxDetail="month"
          tileDisabled={({ date }) =>
            date.toDateString() !== weddingDate.toDateString()
          }
          formatDay={(locale, date) => date.getDate()} // '일' 제거
          tileClassName={({ date, view }) => {
            if (
              view === "month" &&
              date.getFullYear() === 2025 &&
              date.getMonth() === 8 &&
              date.getDate() === 21
            ) {
              return "bold-day";
            }
            return null;
          }}
        />
        <Button
          type="default"
          className="add-button"
          onClick={() =>
            window.open(
              encodeURI(
                `https://calendar.google.com/calendar/render?action=TEMPLATE&text=유준상❤김정현 결혼식&dates=20250921T023000Z/20250921T040000Z&details=서울동부지방법원 3층 동백홀에서 진행됩니다.&location=서울동부지방법원`
              ),
              "_blank"
            )
          }
        >
          📅 캘린더에 추가하기
        </Button>
      </CalendarWrapper>
    </Wrapper>
  );
};

export default CalendarComponent;
