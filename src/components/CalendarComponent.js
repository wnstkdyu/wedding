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
    color:rgb(199, 119, 119);
  }

  .add-button {
    margin-top: 24px;
  }
`;

const CalendarComponent = () => {
  const weddingDate = new Date(2025, 8, 21); // 9월 21일

  const handleDownloadICS = () => {
    const startDate = "20250921T113000"; // 11:30 KST
    const endDate = "20250921T130000";   // 13:00 KST

    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//유준상❤김정현 결혼식//EN
BEGIN:VEVENT
UID:${Date.now()}@wedding-invitation
DTSTAMP:${startDate}
DTSTART;TZID=Asia/Seoul:${startDate}
DTEND;TZID=Asia/Seoul:${endDate}
SUMMARY:유준상❤김정현 결혼식
LOCATION:서울동부지방법원 3층 동백홀
DESCRIPTION:유준상❤김정현 결혼식에 초대합니다.
END:VEVENT
END:VCALENDAR
    `.trim();

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "wedding-invitation.ics";
    link.click();
  };

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
          activeStartDate={new Date(2025, 8, 1)}
          maxDetail="month"
          showNeighboringMonth={false} // 👉 이전/다음 달 날짜 제거
          tileDisabled={({ date }) =>
            date.toDateString() !== weddingDate.toDateString()
          }
          formatDay={(locale, date) => date.getDate()}
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
          onClick={handleDownloadICS}
        >
          📥 캘린더에 추가하기
        </Button>
      </CalendarWrapper>
    </Wrapper>
  );
};

export default CalendarComponent;
