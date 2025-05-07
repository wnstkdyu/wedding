import React from "react";
import styled from "styled-components";
import NaverIcon from "../assets/icons/naver.png";
import KakaoIcon from "../assets/icons/kakao.png";
import TmapIcon from "../assets/icons/tmap.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

const NavButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.45rem;

  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ brand }) => (brand === "kakao" ? "#000" : "#fff")};
  text-decoration: none;
  background: ${({ brand }) =>
    brand === "naver"
      ? "#03C75A"
      : brand === "kakao"
      ? "#FEE500"
      : "#0080FF"};
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img,
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default function NavigationButtons({ lat, lng }) {
  const kakao = `kakaomap://look?p=${lat},${lng}`;
  const naver = `nmap://place?lat=${lat}&lng=${lng}&name=%EC%84%9C%EC%9A%B8%EB%8F%99%EB%B6%80%EC%A7%80%EB%B0%A9%EB%B2%95%EC%9B%90`;
  const tmap  = `tmap://search?name=서울동부지방법원`;

  return (
    <Wrapper>
      <NavButton href={naver} brand="naver">
        <img src={NaverIcon} alt="" aria-hidden="true" />
      </NavButton>

      <NavButton href={kakao} brand="kakao">
        <img src={KakaoIcon} alt="" aria-hidden="true" />
      </NavButton>

      <NavButton href={tmap} brand="tmap">
        <img src={TmapIcon} alt="" aria-hidden="true" />
      </NavButton>
    </Wrapper>
  );
}
