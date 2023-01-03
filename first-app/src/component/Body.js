import "../style/body.css";
import "../style/global.css";
import LikeButton from "./LikeButton";
import Aside from "./Aside";
import Main from "./Main";

export default function Body() {
  return (
    <main>
      <div className="container">
        <div className="leftSide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores
          expedita ex cumque ad deleniti nihil voluptas rem molestiae qui, et
          consequuntur nam veritatis officiis quia facilis, totam, repellat
          vitae quaerat voluptatibus placeat est! Sit, dicta libero quisquam
          maxime doloribus amet beatae et repudiandae, quibusdam delectus, natus
          similique ducimus iure.
        </div>
        <div className="rightSide">
          <div className="rightSide-header">
            <div className="rightSide-header-top">
              <h1>
                Can you force a React component to rerender without calling
                setState?
              </h1>
              <button>Ask Question</button>
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
