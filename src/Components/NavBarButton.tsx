import { Link } from "react-router-dom";

interface NavBarButtonProps {
  link: string;
  text: string;
}

const NavBarButton = ({ link, text }: NavBarButtonProps) => {
  return (
    <div className="navbar__button">
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default NavBarButton;
