import "../style/header.css";
import "../style/global.css";

export default function Header() {
  return (
    <div class="outer">
      <div class="container">
        <div class="header-icon">
          <img src="./icons/stack-overflow.png" alt="" />
          <p>stack</p>
          <p className="overflow">overflow</p>
        </div>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">For Teams</a>
          </li>
        </ul>
        <input type="search" placeholder="Search" ariaLabel="Search" />
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}
