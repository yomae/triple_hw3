import React from "react";
import { useEffect } from "react";
import { MetricsContainer } from "./App.style";

function Metrics() {
  useEffect(() => {
    let traveler = document.querySelector(".traveler-count");
    let review = document.querySelector(".review-count");
    let store = document.querySelector(".store-count");

    let travelerCountNum = Number(traveler.getAttribute("data"));
    let reviewCountNum = Number(review.getAttribute("data"));
    let storeCountNum = Number(store.getAttribute("data"));

    function MetricsFunction(className, max) {
      let num = 0; // 시작 숫자
      let count = 1; // 증가하는 수의 폭 ( ex: 이 수를 작게하면 느리게 증가 )
      let key = 6;

      /* 로직
      들어있는 데이터 (ex: 여행자의 max인 350)에서 key 만큼을 뺀 곳 까지 (344) interval의 반복시간 1ms로 반복 -> 0부터 숫자가 count만큼씩 증가한다.
      344 부터는 증가하는 폭 (count)가 1/2로 줄어든다. 345가 되면 1/4, 346이 되면 1/8 순으로 계속 1/2씩 낮아진다.
      증가하는 폭이 줄어들었으므로 반복 시간이 증가하는 셈이 된다. 1ms -> 2ms -> 4ms -> 8ms
      해당 intervalLoop는 시작 숫자인 num이 max-1이 될 때 끝나며, 밖에 있는 setTimeout (2초 후 정지)에서 나머지 1을 증가시켜서 목표하는 max에 도달한다.
      */

      if (max < 100) {
        count = 0.2;
      } else if (max > 500) {
        count = 2;
      }
      /* 
      이 조건문은 max의 수치에 따라 증가하는 수의 폭을 조절한 것.
      1. 밑의 로직에서 max가 100 미만이라면 너무 빨리 끝나버려 20에서 한동안 멈춰있게 되어 조정.
      2. max가 500 이상이라면 2초가 되기 전에 해당 숫자까지 증가가 되지 않아 오류 -> 증가 폭을 늘림.
      */

      let intervalLoop = setInterval(function () {
        if (num >= max - key) {
          key -= 1;
          count *= 0.5;
        } else {
          num = num + count;
          className.innerText = Math.floor(num);
        }

        if (num >= max - 1) {
          clearInterval(intervalLoop);
        }
      }, 1);

      let timeOut = setTimeout(() => {
        className.innerText = max;
        clearTimeout(timeOut);
      }, 2000);
    }
    MetricsFunction(traveler, travelerCountNum);
    MetricsFunction(review, reviewCountNum);
    MetricsFunction(store, storeCountNum);
  }, []);

  return (
    <MetricsContainer>
      <div>
        <strong>
          <span className="traveler-count" data="350">
            0
          </span>
          만 명
        </strong>
        의 여행자
      </div>
      <div>
        <strong>
          <span className="review-count" data="21">
            0
          </span>
          만 개
        </strong>
        의 리뷰
      </div>
      <div>
        <strong>
          <span className="store-count" data="650">
            0
          </span>
          만 개
        </strong>
        의 저장
      </div>
    </MetricsContainer>
  );
}

export default Metrics;
