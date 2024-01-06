import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="NavBarUl">
        <li className="Nav-element">
          <Link to="/">Strona Główna</Link>
        </li>
        <li className="Nav-element">
          <Link to="/Temat1">Temat 1</Link>
        </li>
        <li className="Nav-element">
          <Link to="/Temat2">Temat 2</Link>
        </li>
        <li className="Nav-element">
          <Link to="/Temat3">Temat 3</Link>
        </li>
        <li className="Nav-element">
          <Link to="/Temat4">Temat 4</Link>
        </li>
        <li className="Nav-element">
          <Link to="/Temat5">Temat 5</Link>
        </li>
        <li className="Nav-element">
          <Link to="/Temat6">Temat 6</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
