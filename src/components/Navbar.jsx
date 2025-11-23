import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo/gab-logo.png"; // ✅ logo path

const links = [
  { to: "/story", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav-bubble">
        {/* ✅ Logo + Brand */}
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="The Great American Bagel Logo"
            className="brand-logo"
          />
          <span className="brand-text">THE GREAT AMERICAN BAGEL</span>
        </Link>

        {/* ✅ Mobile Menu Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* ✅ Nav Links */}
        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* ✅ Order Button */}
        <a
          className="btn btn--pill btn--light"
          href="https://www.talabat.com/bahrain"
          target="_blank"
          rel="noreferrer"
        >
          ORDER ONLINE
        </a>
      </div>
    </header>
  );
}
