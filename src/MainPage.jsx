import React from "react";
import names from "./VictimList";
import TextTransition, { presets } from "react-text-transition";
import MemorialPool from "./MemorialPool";
import "./MainPage.css";

const evenNames = names.filter((_, index) => index % 2 === 0);
const oddNames = names.filter((_, index) => index % 2 === 1);

function MainPage() {
  const [index, setIndex] = React.useState(0);
  const [oddIndex, setOddIndex] = React.useState(0);
  const [listOpen, setListOpen] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index) => (index + 1) % evenNames.length);
        setOddIndex((oddIndex) => (oddIndex + 1) % oddNames.length);
      },
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="main-page">
      <div className="content">
        <h1 style={{ fontFamily: "Noto Serif, serif" }}>Never Forget, 9/11</h1>
        <div className="memorial" onClick={() => setListOpen(!listOpen)}>
          <div>
            <MemorialPool />
            <p className="memorial-name">
              <TextTransition
                direction="down"
                springConfig={presets.molasses}
                style={{ textAlign: "center" }}
              >
                {evenNames[index]}
              </TextTransition>
              <div
                className={
                  "memorial-name-list " + (listOpen ? "list-fade-in" : "")
                }
              >
                {evenNames.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </div>
            </p>
          </div>
          <div>
            <MemorialPool />
            <p className="memorial-name">
              <TextTransition
                direction="down"
                springConfig={presets.molasses}
                style={{ textAlign: "center" }}
              >
                {oddNames[oddIndex]}
              </TextTransition>
              <div
                className={
                  "memorial-name-list " + (listOpen ? "list-fade-in" : "")
                }
              >
                {oddNames.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
