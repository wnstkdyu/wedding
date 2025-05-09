import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";
import HighlightTitle from "../../common-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
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
