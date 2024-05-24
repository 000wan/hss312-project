import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/background_music.mp3");
    toast("버튼을 눌러 배경 음악을 재생하세요", { autoClose: false });
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      toast.dismiss(); // 토스트 메시지 숨기기
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <button className="play-button" onClick={toggleAudio}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ bottom: "60px" }}
      />
    </div>
  );
};

export default MusicPlayer;
