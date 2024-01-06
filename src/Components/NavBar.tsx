import NavBarButton from "./NavBarButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <section className="Links">
        <div className="navbar__location">
          <h2>
            Strona główna
            <svg width="20" height="20" viewBox="0 0 36 36">
              <path
                fill="currentColor"
                d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z"
              />
              <path
                fill="currentColor"
                d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </h2>
        </div>
        <NavBarButton link="/Temat1" text="Temat 1" />
        <NavBarButton link="/Temat2" text="Temat 2" />
        <NavBarButton link="/Temat3" text="Temat 3" />
        <NavBarButton link="/Temat4" text="Temat 4" />
        <NavBarButton link="/Temat5" text="Temat 5" />
        <NavBarButton link="/Temat6" text="Temat 6" />
      </section>
    </nav>
  );
};

export default NavBar;
