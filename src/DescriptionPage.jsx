// DescriptionPage.js
import React from "react";
import "./DescriptionPage.css";

const DescriptionPage = ({ isVisible }) => {
  return (
    <div className={`description-page ${isVisible ? "fade-in" : ""}`}>
      <div style={{ height: "100px" }}></div>
      <h1>9/11 Memorial & Museum</h1>
      <p style={{ textAlign: "right", marginRight: "100px" }}>
        20220043 권영완
      </p>
      <div className="description-box">
        <p className={"description-content " + (isVisible ? "type-in" : "")}>
          9/11 Memorial & Museum 은 2001년 9월 11일 뉴욕 세계 무역 센터에서
          발생한 테러 공격을 기억하고 추모하기 위한 장소입니다.
          <br />
          실제 기념관은 9/11 테러로 파괴된 쌍둥이 빌딩의 부지 위에 세워졌습니다.
        </p>
      </div>
      {/* 더 많은 내용을 추가할 수 있습니다. */}
    </div>
  );
};

export default DescriptionPage;
