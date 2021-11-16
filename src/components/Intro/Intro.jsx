import React, { Component } from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Web Developer", "Web Designer", "Content Creator"],
    });
    console.log(textRef);
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man2.svg" alt="" srcset="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Aryabhat</h1>
          <h3>
            Expert <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down2.png" alt="" srcset="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
