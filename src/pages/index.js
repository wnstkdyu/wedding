import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";
import Guestbook from "../components/Guestbook";
import CalendarComponent from "../components/CalendarComponent";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  useEffect(() => {
    const audio = new Audio(Song);
  
    const startAudio = () => {
      audio.loop = true;
      audio.play().catch(() => {
        // 실패할 수도 있음
      });

      // 한 번만 실행되도록 모든 이벤트 제거
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("scroll", startAudio);
    };
  
    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("touchstart", startAudio, { once: true });
    document.addEventListener("scroll", startAudio, { once: true });
  
    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("scroll", startAudio);
      audio.pause();
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* 기본 필수 */}
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="유준상❤김정현 결혼식에 초대합니다" />
        <meta property="og:description" content="2025년 9월 21일(일) 11:30 서울동부지방법원 3층 동백홀" />
        <meta property="og:image"       content="https://wnstkdyu.github.io/wedding/src/assets/Title.jpg" />
        <meta property="og:url"         content="https://junsang-jeonghyun-wedding.netlify.app/" />
      </Helmet>
      <Wrapper>
        <Title />
        <Greeting />
        <Gallery />
        <CalendarComponent />
        <Location />
        <CongratulatoryMoney />
        <Share />
        <Guestbook />
        <Footer
          style={{
            background: "#D7CCC8",
            backgroundImage: `url(${GroovePaper})`,
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Copyright © 2022 Shin Jooyoung
        </Footer>
      </Wrapper>
    </>
  );
};

export default IndexPage;
