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
  {
    original: photo9,
    thumbnail: photo9
  },
  {
    original: photo10,
    thumbnail: photo10
  },
  {
    original: photo11,
    thumbnail: photo11
  },
  {
    original: photo12,
    thumbnail: photo12
  }
];

const Gallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const fullscreen = document
        ?.querySelector('.image-gallery-content')
        ?.classList.contains('fullscreen');
      setIsFullscreen(fullscreen);
    });

    const target = document.querySelector('.image-gallery-content');
    if (target) {
      observer.observe(target, { attributes: true, attributeFilter: ['class'] });
    }

    return () => observer.disconnect();
  }, []);

  const customRenderItem = (item) => (
    <div
      style={{
        width: '100%',
        height: '400px',
        backgroundColor: isFullscreen ? 'black' : '#efebe9',
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
          objectFit: 'contain',
        }}
      />
    </div>
  );

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
