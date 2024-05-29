import { Tooltip, Chip } from "@mui/material";
import React from "react";
import style from "./card.module.css";

function Card({ data, type }) {
  switch (type) {
    case "album": {
      //slug is the id of the album
      const { image, follows, title, slug, songs } = data;
      return (
        // "?." operator will give null if the value before ?. is undefined
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={style.wrapper}>
            <div className={style.card}>
              <img src={image} alt="album" />
              <div className={style.banner}>
                <Chip
                  label={`${follows} Follows`}
                  className={style.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={style.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }

    case "song": {
      const { image, likes, title, songs } = data;
      return (
        // no tooltip required here according to figma provided
        <div className={style.wrapper}>
          <div className={style.card}>
            <img src={image} alt="album" loading="lazy" />
            <div className={style.banner}>
              <div className={style.pill}>
                <p>{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className={style.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
}

export default Card;
