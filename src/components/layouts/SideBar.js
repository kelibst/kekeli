import React from "react";
import Icofont from "react-icofont";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="brand">Kekeli Dogbevi Jiresse</h1>
      <nav className="side-nav">
        <ul className="nav-ul">
          <li className="side-li">
            <NavLink to="/" className="side-link text-white">
              <Icofont icon="home" /> Home
            </NavLink>
          </li>
          <li className="side-li">
            <NavLink to="/about" className="side-link text-white">
              <Icofont icon="user" /> About
            </NavLink>
          </li>
          <li className="side-li">
            <NavLink to="/projects" className="side-link text-white">
              <Icofont icon="briefcase" /> Projects
            </NavLink>
          </li>
          <li className="side-li">
            <NavLink to="/contact" className="side-link text-white">
              <Icofont icon="envelope" /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="side social">
        <ul className="side social-ul">
          <li className="side social-li">
            <a href="facebook.com" className="side social-link text-white">
              <Icofont icon="twitter" />
            </a>
          </li>

          <li className="side social-li">
            <a href="facebook.com" className="side social-link text-white">
              <Icofont icon="linkedin" />
            </a>
          </li>

          <li className="side social-li">
            <a href="facebook.com" className="side social-link text-white">
              <Icofont icon="facebook" />
            </a>
          </li>

          <li className="side social-li">
            <a href="facebook.com" className="side social-link text-white">
              <Icofont icon="github" />
            </a>
          </li>
        </ul>
        <p className="side-copy text-center">Kekeli &copy; 2020</p>
      </nav>
    </div>
  );
};

export default SideBar;
