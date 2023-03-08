import React, { useState } from "react";

// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

// import navigation data
import { navigation } from "../navbar/data";

// import components
import Socials from "../Socials";

// import framer
import { motion } from "framer-motion";

// import Link
import { Link } from "react-scroll";
import "./navbar_mobile.scss";
export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="navbar-movile">
      <div onClick={() => setIsOpen(true)} className="container-nav-movile">
        <MenuAlt3Icon className="menu-icon" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="motion-div"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${isOpen ? "right" : "right-full "} motion-ul`}
      >
        <div onClick={() => setIsOpen(false)} className="container-open">
          <XIcon className="x-icon" />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                onClick={() => {
                  setIsOpen(false);
                  navigate(item.redirect);
                }}
                to={item.href}
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
        <Socials />
      </motion.ul>
    </nav>
  );
};
