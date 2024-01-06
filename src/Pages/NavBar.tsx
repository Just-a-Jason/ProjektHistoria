import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand navBar" to="/">
        Strona Główna
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/Temat1">
              Temat 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Temat2">
              Temat 2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Temat3">
              Temat 3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Temat4">
              Temat 4
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Temat5">
              Temat 5
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Temat6">
              Temat 6
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
