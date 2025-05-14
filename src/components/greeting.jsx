import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import HighlightTitle from "../../common-components"

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

/* ───────── 괄호 안 시(詩) 부분 ───────── */
const QuoteBlock = styled.div`
  position: relative;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.75;
  text-align: center;
  margin: 0 auto 2.5rem;
  max-width: 320px;

  &::before,
  &::after {                  /* 좌·우 곡선 괄호 */
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    border-radius: 999px;
    background:rgb(205, 227, 172);      /* 연녹색 */
  }
  &::before { left: -14px; }
  &::after  { right: -14px; }
`;

const QuoteAuthor = styled.p`
  font-size: 0.8rem;
  margin-top: 0.75rem;
  color: #6d6d6d;
`;

/* ───────── 이름 라인 강조 ───────── */
const ParentsLine = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin: 0.4rem 0;

  strong { font-weight: 700; }     /* 이름만 굵게 */
`;

const Content = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;      /* 행간 */
  letter-spacing: 0.08em;/* 자간: 0.04×글자크기 ≈ 0.6 px */
  opacity: 0.75;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Greeting = () => {
  return (
    <Wrapper>
      {/* heading */}
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <HighlightTitle>모시는 글</HighlightTitle>
      </Divider>

      {/* (1) 시(詩) 인용 */}
      <QuoteBlock data-aos="fade-up">
        네 앞에 놓여진 세상의 짐을 대신<br />
        다 짊어질 수 없을지는 몰라도<br />
        둘이서 함께라면 나눌 수가 있을까<br />
        그럴 수 있을까
        <QuoteAuthor>– 김동률, 「동행」 –</QuoteAuthor>
      </QuoteBlock>

      {/* (2) 본문 메시지 */}
      <Content data-aos="fade-up">
        같이 있으면 세상에서 가장 편안한 사람,<br />
        기쁨도 슬픔도 모두 나누고픈 사람과<br />
        서로에게 기대어 평생을 약속하고자 합니다.
        <br />
        <br />
        저희의 동행이 새롭게 시작되는 자리에<br />
        떨리는 마음으로 소중한 분들을 모십니다.
      </Content>

      {/* (3) 신랑·신부 가족 라인 */}
      <ParentsLine data-aos="fade-up">
        <strong>{GROOM_FATHER_NAME}</strong> ·{" "}
        <strong>{GROOM_MOTHER_NAME}</strong> 의 장남&nbsp; 
        <strong> 준상</strong>
      </ParentsLine>
      <ParentsLine data-aos="fade-up">
        <strong>{BRIDE_FATHER_NAME}</strong> ·{" "}
        <strong>{BRIDE_MOTHER_NAME}</strong> 의 장녀&nbsp; 
        <strong> 정현</strong>
      </ParentsLine>
    </Wrapper>
  );
};


export default Greeting;
