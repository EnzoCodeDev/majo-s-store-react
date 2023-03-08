import React from "react";
// import navigation data
import { navigation } from "./data";
// import Link
import { Link } from "react-scroll";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="navbar-desktop">
      <ul>
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                onClick={() => navigate(item.redirect)}
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="link-redirect"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
