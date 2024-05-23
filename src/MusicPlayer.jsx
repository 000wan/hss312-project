import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/background_music.mp3"); // 재생할 오디오 파일 경로를 입력하세요.
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <button className="play-button" onClick={toggleAudio}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
