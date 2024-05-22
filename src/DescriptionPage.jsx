// DescriptionPage.js
import React from "react";
import "./DescriptionPage.css";

const DescriptionPage = ({ isVisible }) => {
  return (
    <div className={`description-page ${isVisible ? "fade-in" : ""}`}>
      <h2>About 9/11 Memorial</h2>
      <p>
        9/11 Memorial은 2001년 9월 11일 뉴욕 세계 무역 센터에서 발생한 테러
        공격을 기념하기 위한 장소입니다. 이곳에서는 희생자들을 추모하고, 그들의
        용기와 희생정신을 기리고 있습니다.
      </p>
      {/* 더 많은 내용을 추가할 수 있습니다. */}
    </div>
  );
};

export default DescriptionPage;
