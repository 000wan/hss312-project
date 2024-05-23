import MemorialPool from "./MemorialPool";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <div className="content">
        <h1>Never Forget, 9/11</h1>
        <div className="memorial">
          <MemorialPool />
          <MemorialPool />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
