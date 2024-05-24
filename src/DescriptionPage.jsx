// DescriptionPage.js
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./DescriptionPage.css";

// eslint-disable-next-line react/prop-types
const DescriptionPage = ({ isVisible }) => {
  return (
    <div className={`description-page ${isVisible ? "fade-in" : ""}`}>
      <div style={{ height: "100px" }}></div>
      <h1>9/11 Memorial & Museum</h1>
      <p className="description-name">20220043 권영완</p>
      <div className="description-box">
        <p className={"description-content"}>
          &nbsp; 9/11 Memorial & Museum 은 <b>2001년 9월 11일</b> 뉴욕 세계 무역
          센터에서 발생한 테러 공격을 기억하고 추모하기 위한 장소입니다.
          <br />
          실제 기념관은 9/11 테러로 파괴된 뉴욕시 쌍둥이 빌딩의 부지에
          세워졌습니다.
          <br />
          &nbsp; 기념관은 방문객들에게 9/11 사건의 참상과 의미를 되새기고,
          희생자들을 기리며 평화의 소중함을 일깨우고자 합니다.
          <br />
          &nbsp; 해당 프로젝트는 9/11 추모관 및 박물관을 웹사이트로 제작하여
          물리적인 거리와 상관없이 누구나 방문할 수 있도록 하는 것을 목표로
          합니다.
        </p>

        <Carousel
          className="description-carousel"
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
        >
          <img
            src="/images/memorial.jpg"
            style={{ width: "100%" }}
            className="carousel-image"
          />
          <img
            src="/images/memorial_name.jpg"
            style={{ width: "100%" }}
            className="carousel-image"
          />
          <img
            src="/images/memorial_top.jpg"
            style={{ width: "100%" }}
            className="carousel-image"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default DescriptionPage;
