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
  return (
    <>
      <Helmet>
        {/* 기본 필수 */}
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="유준상❤김정현 결혼식에 초대합니다" />
        <meta property="og:description" content="2025년 9월 21일(일) 11:30 서울동부지방법원 3층 동백홀" />
        <meta property="og:image"       content="https://wnstkdyu.github.io/wedding/src/assets/og.JPG" />
        <meta property="og:url"         content="https://junsang-jeonghyun-wedding.netlify.app/" />
      </Helmet>
      <Wrapper>
        <audio autoPlay loop>
          <source src={Song} />
        </audio>
        <Title />
        <Greeting />
        <Gallery />
        <Location />
        <CongratulatoryMoney />
        <Share />
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
