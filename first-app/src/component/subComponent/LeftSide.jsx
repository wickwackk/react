import "../../style/subStyle/leftSide.css";

export default function LeftSide() {
  return (
    <div className="leftSide">
      <p className="home">
        <a href="#">Home</a>
      </p>
      <p className="leftP">PUBLIC</p>
      <ul className="topUl">
        <li className="worldIncluded">
          <img className="world" src="./world.png" alt="" />
          <a href="#">Questions</a>
        </li>
        <li>
          <a href="">Tags</a>
        </li>
        <li>
          <a href="">Users</a>
        </li>
        <li>
          <a href="">Companies</a>
        </li>
      </ul>
      <div className="infoIncluded">
        <p className="leftP">COLLECTIVES</p>
        <img className="info" src="./info.png" alt="" />
      </div>

      <ul>
        <li className="starIncluded">
          <svg
            aria-hidden="true"
            class="star"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="#F28C28"
          >
            <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path>
          </svg>
          <a href="#">Explore Collectives</a>{" "}
        </li>
      </ul>
      <p className="leftP">TEAMS</p>
      <div className="teamsBanter">
        <p>
          <strong>Stack Overflow for Teams </strong>– Start collaborating and
          sharing organizational knowledge.
        </p>
        <img
          className="freePic"
          src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
          alt=""
        />
        <button className="mainButton">
          <span>Create a free Team</span>
        </button>
        <button className="teams">
          <span>Why Teams?</span>
        </button>
      </div>
    </div>
  );
}
