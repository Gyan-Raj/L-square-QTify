import React from "react";
import style from "./logo.module.css";
import logoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logoImg} alt="logo" />
    </div>
  );
};
export default Logo;
