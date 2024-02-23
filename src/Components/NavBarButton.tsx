import { Link } from "react-router-dom";

interface NavBarButtonProps {
  link: string;
  text: string;
}

const NavBarButton = ({ link, text }: NavBarButtonProps) => {
  return (
    <div className="navbar__button">
      <Link to={link}>
        {text}{" "}
        <svg width="20" height="20" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4" />
            <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default NavBarButton;
