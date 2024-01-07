import NavBarButton from "./NavBarButton";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li className="navbarButton">
          <Link to="/">
            Strona główna
            <svg width="18" height="18" viewBox="0 0 36 36">
              <path
                fill="currentColor"
                d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19"
              />
              <path
                fill="currentColor"
                d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </Link>
        </li>
        <div className="mainPages">
          <li className="navbarButton">
            <NavBarButton link="/Temat1" text="Temat 1" />
          </li>
          <li className="navbarButton">
            <NavBarButton link="/Temat2" text="Temat 2" />
          </li>
          <li className="navbarButton">
            <NavBarButton link="/Temat3" text="Temat 3" />
          </li>
          <li className="navbarButton">
            <NavBarButton link="/Temat4" text="Temat 4" />
          </li>
          <li className="navbarButton">
            <NavBarButton link="/Temat5" text="Temat 5" />
          </li>
          <li className="navbarButton">
            <NavBarButton link="/Temat6" text="Temat 6" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
