import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import photo1 from "../assets/photo_1.jpg"
import photo2 from "../assets/photo_2.jpg"
import photo3 from "../assets/photo_3.jpg"
import photo4 from "../assets/photo_4.jpg"
import photo5 from "../assets/photo_5.jpg"
import photo6 from "../assets/photo_6.jpg"
import photo7 from "../assets/photo_7.jpg"
import photo8 from "../assets/photo_8.jpg"
import photo9 from "../assets/photo_9.jpg"
import photo10 from "../assets/photo_10.jpg"
import photo11 from "../assets/photo_11.jpg"
import photo12 from "../assets/photo_12.jpg"
import photo13 from "../assets/photo_13.jpg"
import photo14 from "../assets/photo_14.jpg"
import photo15 from "../assets/photo_15.jpg"
import photo16 from "../assets/photo_16.jpg"
import photo17 from "../assets/photo17.webp"
import photo18 from "../assets/photo18.webp"
import photo19 from "../assets/photo19.webp"
import photo20 from "../assets/photo20.webp"
import photo21 from "../assets/photo21.webp"
import photo22 from "../assets/photo22.webp"
import photo23 from "../assets/photo23.webp"
import photo24 from "../assets/photo24.webp"
import photo25 from "../assets/photo25.webp"
import photo26 from "../assets/photo26.webp"
import photo27 from "../assets/photo27.webp"
import photo28 from "../assets/photo28.webp"
import photo29 from "../assets/photo29.webp"
import photo30 from "../assets/photo30.webp"
import photo31 from "../assets/photo31.webp"
import photo32 from "../assets/photo32.webp"
import photo33 from "../assets/photo33.webp"
import photo34 from "../assets/photo34.webp"
import HighlightTitle from "../../common-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const images = [
  { original: photo1, thumbnail: photo1 },
  { original: photo2, thumbnail: photo2 },
  { original: photo3, thumbnail: photo3 },
  { original: photo4, thumbnail: photo4 },
  { original: photo5, thumbnail: photo5 },
  { original: photo6, thumbnail: photo6 },
  { original: photo7, thumbnail: photo7 },
  { original: photo8, thumbnail: photo8 },
  { original: photo9, thumbnail: photo9 },
  { original: photo10, thumbnail: photo10 },
  { original: photo11, thumbnail: photo11 },
  { original: photo12, thumbnail: photo12 },
  { original: photo13, thumbnail: photo13 },
  { original: photo14, thumbnail: photo14 },
  { original: photo15, thumbnail: photo15 },
  { original: photo16, thumbnail: photo16 },
  { original: photo17, thumbnail: photo17 },
  { original: photo18, thumbnail: photo18 },
  { original: photo19, thumbnail: photo19 },
  { original: photo20, thumbnail: photo20 },
  { original: photo21, thumbnail: photo21 },
  { original: photo22, thumbnail: photo22 },
  { original: photo23, thumbnail: photo23 },
  { original: photo24, thumbnail: photo24 },
  { original: photo25, thumbnail: photo25 },
  { original: photo26, thumbnail: photo26 },
  { original: photo27, thumbnail: photo27 },
  { original: photo28, thumbnail: photo28 },
  { original: photo29, thumbnail: photo29 },
  { original: photo30, thumbnail: photo30 },
  { original: photo31, thumbnail: photo31 },
  { original: photo32, thumbnail: photo32 },
  { original: photo33, thumbnail: photo33 },
  { original: photo34, thumbnail: photo34 },
];

const Gallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [deviceType, setDeviceType] = useState(`mobile`); // 초기값은 'mobile'

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const fullscreen = document
        ?.querySelector(".image-gallery-content")
        ?.classList.contains("fullscreen");
      setIsFullscreen(fullscreen);
    });

    const target = document.querySelector(".image-gallery-content");
    if (target) {
      observer.observe(target, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType("mobile");
      else if (width < 1024) setDeviceType("tablet");
      else setDeviceType("desktop");
    };

    // 최초 실행
    handleResize();

    // 이벤트 등록
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customRenderItem = (item) => {
    let height;
    if (isFullscreen) {
      height =
        deviceType === "desktop"
          ? "800px"
          : deviceType === "tablet"
          ? "800px"
          : "550px";
    } else {
      height = "400px";
    }

    return (
      <div
        style={{
          width: "100%",
          height,
          backgroundColor: isFullscreen ? "black" : "#efebe9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={item.original}
          alt={item.originalAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    );
  };

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <HighlightTitle>우리의 아름다운 순간</HighlightTitle>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={true}
        useBrowserFullscreen={false}
        items={images}
        renderItem={customRenderItem}
      />
    </Wrapper>
  );
};

export default Gallery;
