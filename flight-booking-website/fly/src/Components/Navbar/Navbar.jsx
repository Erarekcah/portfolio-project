import React, { useState } from "react";
// Icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
// Images
import logo from "../../assets/logo.png";

const Navbar = () => {
  // add - remove ==> NavBar
  const [active, setActive] = useState("navBarMen");
  const [activeNav, setActiveNav] = useState(false);
  const showNavbar = () => {
    setActiveNav(!activeNav);
    !activeNav ? setActive("navBarMen showNavbar") : setActive("navBarMen");
  };

  // add bg color ==> NavBar
  const [noBg, addBg] = useState("navBartTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBartTwo navbar_Width_Bg");
    } else {
      addBg("navBartTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className={"navBar flex"}>
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sing In</span>
          <span>Sing Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={showNavbar} className="listItem">
              Home
            </li>
            <li onClick={showNavbar} className="listItem">
              About
            </li>
            <li onClick={showNavbar} className="listItem">
              Offers
            </li>
            <li onClick={showNavbar} className="listItem">
              Seats
            </li>
            <li onClick={showNavbar} className="listItem">
              Destinations
            </li>
          </ul>

          <button onClick={showNavbar} className="btn flex btnOne">
            Contact
          </button>
        </div>
        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavbar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
