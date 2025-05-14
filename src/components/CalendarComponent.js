import React, { useEffect, useState } from "react";
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
    color:rgb(219, 130, 130);
  }

  .add-button {
    margin-top: 24px;
  }
`;

const CountdownWrapper = styled.div`
  text-align: center;
  margin-top: 32px;
`;

const TimeBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
`;

const TimeBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 8px 12px;
  min-width: 60px;
`;

const TimeLabel = styled.div`
  font-size: 0.7rem;
  color: #999;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

const TimeValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Message = styled.div`
  font-size: 0.9rem;
  color: #333;

  span {
    color: red;
    font-weight: bold;
  }
`;

const CalendarComponent = () => {
  const weddingDate = new Date(2025, 8, 21); // 9월 21일
  const [timeLeft, setTimeLeft] = useState(getTimeDiff(weddingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeDiff(weddingDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadICS = () => {
    const startDate = "20250921T113000";
    const endDate = "20250921T130000";
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
          showNeighboringMonth={false}
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
        <CountdownWrapper>
          <TimeBoxContainer>
            <TimeBox>
              <TimeLabel>Days</TimeLabel>
              <TimeValue>{timeLeft.days}</TimeValue>
            </TimeBox>
            <TimeBox>
              <TimeLabel>Hour</TimeLabel>
              <TimeValue>{timeLeft.hours}</TimeValue>
            </TimeBox>
            <TimeBox>
              <TimeLabel>Min</TimeLabel>
              <TimeValue>{timeLeft.minutes}</TimeValue>
            </TimeBox>
            <TimeBox>
              <TimeLabel>Sec</TimeLabel>
              <TimeValue>{timeLeft.seconds}</TimeValue>
            </TimeBox>
          </TimeBoxContainer>
          <Message>
            유준상 ❤️ 김정현의 결혼식이 <span>{timeLeft.totalDays}</span>일 남았습니다
          </Message>
        </CountdownWrapper>
      </CalendarWrapper>
    </Wrapper>
  );
};

function getTimeDiff(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
  const days = totalDays;
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    totalDays,
  };
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

export default CalendarComponent;
