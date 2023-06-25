import React from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import cardStyle from "./Card.module.css";

const SongsCard = ({ data }) => {
  const { title, likes, image, genre } = data;
  return (
    <Tooltip title={genre.label} placement="top" arrow>
      <div className={cardStyle.cardWrapper}>
        <div className={cardStyle.card}>
          <img src={image} alt={title} width={159} height={170} />
          <div className={cardStyle.cardBanner}>
            <Chip
              label={`${likes} Likes`}
              size="small"
              className={cardStyle.followChip}
            />
          </div>
        </div>
        <div className={cardStyle.cardTitleWrapper}>
          <p className={cardStyle.cardTitle}>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
};

export default SongsCard;
