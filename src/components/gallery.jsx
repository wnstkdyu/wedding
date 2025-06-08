import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import photo1 from "../assets/photo_1.jpg"
import photo2 from "../assets/photo_2.jpg"
import photo3 from "../assets/photo_3.jpg"
import HighlightTitle from "../../common-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

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
      />
    </Wrapper>
  );
};

export default Gallery;
