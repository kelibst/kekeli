import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);


const Home = () => {
  const words = [
    "Kekeli Dogbevi Jiresse",
    "Ruby Developer",
    "Ruby on Rails Developer",
    "Front-End Software Developer",
    "Back-End Software Developer",
    "Full-Stack Software Developer",
  ];

  let cur = useRef(null)
  let box = useRef(null)
  let hi = useRef(null)
  let textAnim = useRef(null)
  let tl = gsap.timeline();
  let masterTl = gsap.timeline({repeat: -1}).pause();

  useEffect(()=> {
     
    words.forEach(word => {
      let tline = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
      tline.to(textAnim, { duration: 1.6, text: word})

      masterTl.add(tline)
    })
    gsap.to(
      cur, {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1
      }
    )

    tl.
    to(
      box, 
      {
        duration: 1,
        width: 100,
        delay: .5,
        opacity: 1,
        ease: "power4.inOut"
      }
    ) 
    .from(
      hi, { duration: 1, y: 20, ease: "power3.out" , onComplete: () => masterTl.play()}
    )
  })

  return (
    <div className="home">
      <div className="home-content">
        
        <h4 ref={el => { hi = el }} className="home-head"><span ref={el => { box = el }} className="box"></span>Hello, I am</h4>
        <h1 className="home-header">
          <span ref={el => { textAnim = el }} className="text"></span>
          <span  ref={el => { cur = el }} className="cursor">_</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
