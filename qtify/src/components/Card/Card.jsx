import { Tooltip } from "@mui/material";
import React from "react";
import style from "./card.module.css";

function Card() {
  return (
    <div>
      <Tooltip className={style.tooltip}>
        <div className={style.content}>
          <div className={style.image}>image</div>
          <div>chip</div>
        </div>
        <div>title</div>
      </Tooltip>
    </div>
  );
}

export default Card;
