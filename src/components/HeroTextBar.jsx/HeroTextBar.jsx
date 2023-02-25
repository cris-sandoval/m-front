import React from "react";
import "./herotextbar.css";
import hero1 from "../../image/personaje1.png";
import port from "../../image/img-port.png";

export default function HeroTextBar() {
  return (
    <div className="container-main2">
      <div className="container2-img-hero-text">
        {/* <div className="container-img-hero"> */}
          <img className="hero1" src={hero1} alt="hero1" />
          <img className="port" src={port} alt="port" />
        {/* </div> */}
        <div className="container-hero-text">
          <div>
            <h3 className="h3">My Hero Academy</h3>
          </div>
          <p className="p">Manga</p>
          <p className="p">
            In a world in which most of the population is born with a Gift, a
            different extraordinary ability in each one, it didn't take long for
            both villains and heroes to appear ready to stop them.
          </p>
        </div>
      </div>
    </div>
  );
}
