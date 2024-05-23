// App.js
import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import DescriptionPage from "./DescriptionPage";
import MusicPlayer from "./MusicPlayer";
import "./App.css";

const App = () => {
  const [showDescriptionPage, setShowDescriptionPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > window.innerHeight * 0.5) {
        setShowDescriptionPage(true);
      } else {
        setShowDescriptionPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <MusicPlayer />
      <MainPage />
      <div style={{ height: "100px" }}></div>
      <DescriptionPage isVisible={showDescriptionPage} />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
};

export default App;
