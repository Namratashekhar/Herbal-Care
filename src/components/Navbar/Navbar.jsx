import "./Navbar.css";
import { Link } from "react-router-dom";
import { House, FileUser, Phone, HeartHandshake } from "lucide-react";

function Navbar({ active }) {
  return (
    <div className="navbar">
      <Link to="/" className={`menu-item ${active === "home" ? "active-menu" : ""}`}>
        <House className="menu-icon" /> Home
      </Link>

      <Link to="/about" className={`menu-item ${active === "about" ? "active-menu" : ""}`}>
        <FileUser className="menu-icon" /> About
      </Link>

      <Link to="/contact" className={`menu-item ${active === "contact" ? "active-menu" : ""}`}>
        <Phone className="menu-icon" /> Contact
      </Link>

      <Link to="/ourservice" className={`menu-item ${active === "services" ? "active-menu" : ""}`}>
        <HeartHandshake className="menu-icon" /> Our Services
      </Link>
    </div>
  );
}

export default Navbar;