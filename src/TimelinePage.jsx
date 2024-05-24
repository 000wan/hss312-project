import React from "react";
import YoutubeCarousel from "./YoutubeCarousel";
import styled from "styled-components";

const TimelinePage = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/911_image.jpg" alt="9/11 Timeline" />
      </ImageContainer>
      <ShortContentContainer>
        <Title>9/11 Timeline</Title>
        <DescriptionBox>
          <Description>
            &nbsp; 2001년 9월 11일, 아름답고 화창한 아침이 뉴욕의 하루를 열고
            있었습니다. 그러나 이 날 미국은 9/11 테러로 불리는 비행기 자살 테러
            공격을 받게 됩니다. 이 사건은 미국과 전 세계인의 가슴에 깊은 상처를
            남기게 되었습니다.
            <br />
            <br />
            &nbsp; <b>테러의 시작</b> - 아침 8시 46분, 아메리칸 에어라인 11편
            보잉 767기가 세계무역센터 북쪽 타워를 먼저 강타했습니다. 이후 9시
            3분, 유나이티드 에어라인 175편 보잉 767 여객기가 세계무역센터 남쪽
            타워에 전속력으로 충돌했습니다.
            <br />
            &nbsp; <b>화재와 혼란</b> - 충돌로 두 빌딩에 화재가 일어났고 검은
            연기가 하늘로 치솟았습니다. 빌딩에는 수천 명의 사무실 직원들이
            근무하고 있었습니다. 구조대와 뉴욕 소방대원들이 출동해 구조 작업을
            벌였습니다.
            <br />
            &nbsp; <b>붕괴의 순간</b> - 오전 9시 59분, 남쪽 타워가 마침내
            붕괴하면서 수많은 인명 피해가 발생했습니다. 이어 10시 28분에는 북쪽
            타워도 무너졌습니다.
            <br />
          </Description>
          <Description>
            &nbsp; <b>추가 공격</b> - 이와 동시에 워싱턴 D.C.에서도 테러가
            자행되었습니다. 아메리칸 항공 77편이 국방부 본부인 펜타곤 건물을
            강타했고, 펜실베이니아 샌크리스비에서는 유나이티드 93편이
            추락했습니다.
            <br />
            &nbsp; <b>충격과 공포</b> - 이 일련의 공격으로 2,996명의 사망자가
            발생했습니다. 뉴욕의 상징인 세계무역센터 쌍둥이 빌딩이 무너진 것은
            너무나 충격적인 광경이었습니다. 사무실, 가게, 건물 등 현장이
            아비규환이 되었습니다.
            <br />
            &nbsp; <b>구조 작업</b> - 수많은 구조대원들이 모여 잔해 더미에 갇힌
            생존자를 구조하기 위해 필사적으로 힘썼습니다. 그러나 건물의 붕괴로
            많은 실종자들의 유해도 찾기 힘들었습니다.
            <br />
            &nbsp; 이 비극적 사건은 각종 미디어로 생중계되며 전세계에 큰 충격을
            주었습니다. 해당 테러에는 미국과 이슬람 극단주의자들 간의 갈등이
            깊게 녹아있었으며, 이후 중동 지역에서 십여 년 동안 미국의
            &apos;테러와의 전쟁&apos;으로 이어지게 되었습니다.
          </Description>
        </DescriptionBox>
      </ShortContentContainer>
      <hr style={{ width: "1000px " }} />
      <ContentContainer>
        <Title>미디어에 기록된 9/11 테러</Title>
        <br />
        <h3>#영상 매체</h3>
        <YoutubeCarousel videos={videos} />
        <br />
        <br />
        <h3>#사진 매체</h3>
        <YoutubeCarousel videos={images} />
      </ContentContainer>
    </Container>
  );
};

const videos = [
  {
    id: "S6Bg824b2BY",
    title: "세계무역센터 첫번째 충돌",
    description:
      "아침 8시 46분 뉴욕시 소방관의 다큐멘터리를 촬영하던 프랑스의 영화 감독 Jules Naudet가 포착한 영상. 첫번째 충돌을 담은 영상은 희귀하다.",
    startTime: 25, // 25초부터 시작
  },
  {
    id: "LsGcIkevyHM",
    title: "세계무역센터 두번째 충돌",
    description:
      "첫번째 충돌 이후 CNN이 생중계 중 발생한 두번째 충돌. 현 상황이 사고가 아닌 테러임을 알리는 순간",
    startTime: 0,
  },
  {
    id: "heGULQ_A-Xo",
    title: "소방대원들의 기록",
    description:
      "9/11 테러 당시 뉴욕 소방관들의 헌신적인 구조 작업. 당시 뉴욕 소방국 소속 소방대원 343명을 포함해 응급구조원 총 412명이 순직했다.",
    startTime: 0,
  },
  {
    id: "ieIFtjnBfJU",
    title: "쌍둥이 빌딩의 붕괴",
    description:
      "세계무역센터 남쪽 타워가 처음으로 붕괴되는 순간. 뉴욕의 상징인 세계무역센터가 무너지는 광경은 전 세계인에게 충격을 주었다.",
    startTime: 0,
  },
];

const images = [
  {
    imageSrc: "/images/The_Falling_Man.jpg",
    title: "The Falling Man",
    description:
      "AP 통신의 사진작가 Richard Drew가 촬영한 9/11 테러 당시 뉴욕 세계무역센터에서 뛰어내린 사람의 사진. 이 사진은 여러 논란과 비판을 불러일으켰다.",
  },
  {
    imageSrc: "/images/bush_reaction.jpg",
    title: "'America is under attack'",
    description:
      "미국의 대통령 비서실장 Andrew Card가 George W. Bush 미대통령에게 9/11 테러 공격 사실을 알리는 순간. 당시 대통령은 플로리다 주의 초등학교에 방문 중이었다.",
  },
  {
    imageSrc: "/images/city_block.jpg",
    title: "건물 붕괴 현장",
    description:
      "사진 작가 Justin Lane이 포착한 건물 붕괴 후 거리에서 치료받는 소방관의 모습. 수많은 잔해와 먼지가 뉴욕 일대를 뒤덮었다. 이 사진은 2002년 퓰리처상을 수상했다.",
  },
  {
    imageSrc: "/images/pentagon.jpg",
    title: "공격받은 펜타곤",
    description:
      "같은 날 워싱턴 D.C.에서 발생한 테러 공격으로 피해를 입은 국방부 본부 펜타곤의 사진. 아메리칸 항공 77편이 건물에 충돌하여 184명의 사망자가 발생했다.",
  },
];

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

const ShortContentContainer = styled.div`
  max-width: 800px;
  padding: 2rem;
  text-align: center;
`;

const ContentContainer = styled.div`
  width: 800px;
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
