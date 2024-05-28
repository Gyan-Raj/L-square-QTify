import React from "react";
import style from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
const Search = (data) => {
  return (
    <form className={style.form}>
      <input
        type="text"
        className={style.input}
        placeholder={data.placeholder}
      />
      <button className={style.button}>
        <SearchIcon />
      </button>
    </form>
  );
};
export default Search;
