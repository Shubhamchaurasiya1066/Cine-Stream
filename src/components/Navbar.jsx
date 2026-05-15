import { FaFilm } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <FaFilm className="logo-icon" />
        <h1>CineStream</h1>
      </div>
    </nav>
  );
};

export default Navbar;