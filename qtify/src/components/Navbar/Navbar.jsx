import React from "react";
import styles from "./navbar.module.css";
import Logo from "../Logo/Logo.jsx";
import SearchBar from "../Search/Search.jsx";
import Button from "../Button/Button.jsx";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <SearchBar search={"Search a song of your choice"} />
        <Button children={"Give Feedback"} />
      </nav>
    </>
  );
};

export default Navbar;
