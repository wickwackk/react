import "../style/body.css";
import "../style/global.css";
import LikeButton from "./subComponent/LikeButton";
import Aside from "./subComponent/Aside";
import Main from "./subComponent/Main";
import LeftSide from "./subComponent/LeftSide";

export default function Body() {
  return (
    <main>
      <div className="container">
        <LeftSide />
        <div className="rightSide">
          <div className="rightSide-header">
            <div className="rightSide-header-top">
              <h1>
                Can you force a React component to rerender without calling
                setState?
              </h1>
              <button className="mainButton">Ask Question</button>
            </div>
            <div className="rightSide-header-bottom">
              <p>Asked 7 years 7 months</p>
              <p>Modified yesterday</p>
              <p>Viewed 1.4m times</p>
            </div>
          </div>
          <div className="rightSideMain">
            <LikeButton />
            <Main />
            <Aside />
          </div>
        </div>
      </div>
    </main>
  );
}
