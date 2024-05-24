import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import YouTube from "react-youtube";
import "./YoutubeCarousel.css";

function YoutubeCarousel(props) {
  const { videos } = props;
  const [startTime, setStartTime] = useState(0); // 시작 시간 상태 추가

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      start: startTime, // 시작 시간 설정
    },
  };

  const handleVideoStart = (event, startTime) => {
    setStartTime(startTime); // 시작 시간 업데이트
  };

  return (
    <Carousel animation="slide" navButtonsAlwaysVisible autoPlay={false} a>
      {videos.map((video, index) => (
        <Item
          key={index}
          video={video}
          opts={opts}
          handleVideoStart={handleVideoStart}
        />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const { video, opts, handleVideoStart } = props;

  return (
    <Paper elevation={4} className="yt-carousel-box">
      {!video.imageSrc ? (
        <YouTube
          videoId={video.id}
          opts={opts}
          onReady={(event) => handleVideoStart(event, video.startTime)}
        />
      ) : (
        <img
          src={video.imageSrc}
          alt={video.title}
          style={{ height: "390px", objectFit: "contain" }}
        />
      )}
      <div className="yt-box">
        <h2 className="yt-title">{video.title}</h2>
        <p className="yt-description">{video.description}</p>
      </div>
    </Paper>
  );
}

export default YoutubeCarousel;
