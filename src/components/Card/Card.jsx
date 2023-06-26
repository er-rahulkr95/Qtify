import React from 'react'
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import cardStyle from './Card.module.css'
const Card = ({data, type}) => {
  const { title,follows,image,songs} = data ;
  return (
    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
      <div className={cardStyle.cardWrapper}>
        <div className={cardStyle.card}>
            <img src={image} alt={title} className={cardStyle.cardImage}/>
            <div className={cardStyle.cardBanner}>
                <Chip label={`${follows} Follows`} size='small' className={cardStyle.followChip}/>
            </div>
        </div>
        <div className={cardStyle.cardTitleWrapper}>
            <p className={cardStyle.cardTitle}>{title}</p>
        </div>
    </div>
  </Tooltip>

 
  )
}

export default Card