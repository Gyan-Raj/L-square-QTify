import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" />
      <Button></Button>
    </nav>
  );
};
export default Navbar;
