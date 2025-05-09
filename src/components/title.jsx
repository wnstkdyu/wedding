import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_TIME,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import TitleImage from "../assets/Title.jpg"

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const WeddingInvitation = styled.p`
  font-size: 1.6rem;
  font-weight: semi-bold;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: medium;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const ImageBanner = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>마침내, 결혼합니다!</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_TIME}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <ImageBanner src={TitleImage} alt="웨딩 사진" />
    </Layout>
  );
};

export default Title;
