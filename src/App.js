import React from "react";
import Metrics from "./Metrics";
import {
  AppContainer,
  ContentLogo,
  AwardsContainer,
  PlayStore,
  AppStore,
} from "./App.style";

function App() {
  return (
    <AppContainer>
      <ContentLogo>2019년 2월 기준</ContentLogo>
      <Metrics />
      <AwardsContainer>
        <PlayStore>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </PlayStore>
        <AppStore>
          2018 애플 앱스토어
          <br />
          오늘의 여행 앱 선정
        </AppStore>
      </AwardsContainer>
    </AppContainer>
  );
}

export default App;
