import styled, { keyframes } from "styled-components";

export const titlelogo = keyframes`
  0% {
    opacity: 0%;
    transform: translateY(15px);
  }
  100% {
    opacity: 100%;
    transform: translateY(0px);
  }
`;

export const metrics = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const awards = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const AppContainer = styled.div`
  min-width: 1200px;
`;

export const ContentLogo = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url("triple2x.png");
  background-repeat: no-repeat;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);

  animation: ${titlelogo} 700ms linear 400ms both;
`;

export const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  > div {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    color: rgb(58, 58, 58);
  }
  animation: ${metrics} 700ms linear 500ms both;
`;

export const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  > div {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
    display: inline-block;
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
  }
  animation: ${awards} 700ms linear 600ms both;
`;

export const PlayStore = styled.div`
  background-image: url("play-store2x.png");
`;

export const AppStore = styled.div`
  background-image: url("badge-apple4x.png");
`;
