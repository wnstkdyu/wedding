import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import NavigationButtons from "./NavigationButtons";
import HighlightTitle from "../../common-components"

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  const LAT = 37.484113;
  const LNG = 127.120135;
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1746470118188",
    "key" : "2nwo7",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <HighlightTitle>오시는 길</HighlightTitle>
      </Divider>
      <Map
        id="daumRoughmapContainer1746470118188"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <NavigationButtons
        lat={LAT} lng={LNG}
      ></NavigationButtons>
      <Content> 
        서울 송파구 법원로 101
        <br />
        서울동부지방법원 동백홀
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        서울동부지방법원 앞 건영아파트 정류장 하차(도보 10분)
        <br /> 
        - 일반버스(녹색) : 30, 31, 32, 119, 331
        <br />
        - 간선버스(청색) : 302, 303, 320, 333, 343, 345, 350, 360
        <br />
        - 지선버스(녹색) : 3322, 3420
        <br />
        - 직행 및 광역버스(적색) : 500-1, 1009, 1112, 1117, 1650, 3302, 9403
        <br />
        <Title>지하철 이용시 </Title>
        <br />
        8호선 문정역 하차 ③번 출구(도보 10분)
        <br />
        <Title>자가용 안내</Title>
        <br />
        법원 지상 주차장 이용 가능합니다.
        <br />
        <Title>예식장 출입</Title>
        <br />
        법원 청사 민원동 1번 출입구 이용
        <br />
      </Content>
    </Wrapper>
  );
};

export default Location;
