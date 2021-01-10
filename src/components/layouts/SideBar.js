import { TweenLite, Power4 } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import Icofont from "react-icofont";
import { NavLink } from "react-router-dom";
import './Sidebar.scss'

const SideBar = (props) => {
    const { show, setShow } = props
    let ref = useRef(null);

    useEffect(() => {
       if (show){
           console.log('run')
        TweenLite.to(ref, 0.3, {
            opacity: 0, 
            width: 0,
            left: "300px",
            ease: Power4.easeOut
          }) 
       }
    }, [show])
    const sideToggle = show ? "side-toggled" : "side-hidden";
  return (
    <div className={`${sideToggle} sidebar`} ref={el => { ref = el }}>
      <h1 className="brand">Kekeli Dogbevi Jiresse</h1>
      <nav className="side-nav">
        <ul className="nav-ul">
          <li className="side-li">
            <NavLink exact to="/" className="side-link text-white">
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
