import React from "react";
import heroImage from "../../assets/hero_headphones.png";
import style from "./hero.module.css";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImage} alt="Headphone" className={style.image} />
      </div>
    </div>
  );
}

export default Hero;
