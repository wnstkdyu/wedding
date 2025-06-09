import React from "react";
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
import HighlightTitle from "../../common-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const customRenderItem = (item) => (
  <div
    style={{
      width: '100%',
      height: '400px', // 원하는 고정 높이
      backgroundColor: 'black', // 레터박스 느낌을 위해
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={item.original}
      alt={item.originalAlt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain', // 비율 유지하며 내부에 맞춤
      }}
    />
  </div>
);

const images = [
  {
    original: photo1,
    thumbnail: photo1
  },
  {
    original: photo2,
    thumbnail: photo2
  },
  {
    original: photo3,
    thumbnail: photo3
  },
  {
    original: photo4,
    thumbnail: photo4
  },
  {
    original: photo5,
    thumbnail: photo5
  },
  {
    original: photo6,
    thumbnail: photo6
  },
  {
    original: photo7,
    thumbnail: photo7
  },
  {
    original: photo8,
    thumbnail: photo8
  },
];

const Gallery = () => {
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
