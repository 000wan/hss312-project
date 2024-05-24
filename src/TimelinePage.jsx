import React from "react";
import styled from "styled-components";

const TimelinePage = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/911_image.jpg" alt="9/11 Timeline" />
      </ImageContainer>
      <ContentContainer>
        <Title>9/11 Timeline</Title>
        <DescriptionBox>
          <Description>
            &nbsp; 2001년 9월 11일, 아름답고 화창한 아침이 뉴욕의 하루를 열고
            있었습니다. 그러나 이 날 미국은 9/11 테러로 불리는 비행기 자살 테러
            공격을 받게 됩니다. 이 사건은 미국과 전 세계인의 가슴에 깊은 상처를
            남기게 되었습니다.
            <br />
            <br />
            <b>테러의 시작</b> - 아침 8시 46분, 아메리칸 에어라인 11편 보잉
            767기가 세계무역센터 북쪽 타워를 먼저 강타했습니다. 이후 9시 3분,
            유나이티드 에어라인 175편 보잉 767 여객기가 세계무역센터 남쪽 타워에
            전속력으로 충돌했습니다.
            <br />
            <b>화재와 혼란</b> - 충돌로 두 빌딩에 화재가 일어났고 검은 연기가
            하늘로 치솟았습니다. 빌딩에는 수천 명의 사무실 직원들이 근무하고
            있었습니다. 구조대와 뉴욕 소방대원들이 출동해 구조 작업을
            벌였습니다.
            <br />
            <b>붕괴의 순간</b> - 오전 9시 59분, 북쪽 타워가 마침내 붕괴하면서
            수많은 인명 피해가 발생했습니다. 이어 10시 28분에는 남쪽 타워도
            무너졌습니다.
            <br />
          </Description>
          <Description>
            <b>추가 공격</b> - 이와 동시에 워싱턴 D.C.에서도 테러가
            자행되었습니다. 아메리칸 항공 77편이 국방부 본부인 펜타곤 건물을
            강타했고, 펜실베이니아 샌크리스비에서는 유나이티드 93편이
            추락했습니다.
            <br />
            <b>충격과 공포</b> - 이 일련의 공격으로 2,996명의 사망자가
            발생했습니다. 뉴욕의 상징인 세계무역센터 쌍둥이 빌딩이 무너진 것은
            너무나 충격적인 광경이었습니다. 사무실, 가게, 건물 등 현장이
            아비규환이 되었습니다.
            <br />
            <b>구조 작업</b> - 수많은 구조대원들이 모여 잔해 더미에 갇힌
            생존자를 구조하기 위해 필사적으로 힘썼습니다. 그러나 건물의 붕괴로
            많은 실종자들의 유해도 찾기 힘들었습니다.
            <br />
            &nbsp; 이 비극적 사건은 각종 미디어로 생중계되며 전세계에 큰 충격을
            주었습니다. 해당 테러에는 미국과 이슬람 극단주의자들 간의 갈등이
            깊게 녹아있었으며, 이후 중동 지역에서 십여 년 동안 미국의
            &apos;테러와의 전쟁&apos;으로 이어지게 되었습니다.
          </Description>
        </DescriptionBox>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: left;
  width: 50%;
  margin: 1rem;
`;

const DescriptionBox = styled.div`
  height: 750px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export default TimelinePage;
