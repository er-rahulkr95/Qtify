import React from 'react'
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import cardStyle from './Card.module.css'
const Card = () => {
  return (
    <Tooltip title="100 songs" placement="top" arrow>
      <div className={cardStyle.cardWrapper}>
        <div className={cardStyle.card}>
            <img src='https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800' alt='top-album' width={159} height={170}/>
            <div className={cardStyle.cardBanner}>
                <Chip label="100 Follows" size='small' className={cardStyle.followChip}/>
            </div>
        </div>
        <div>
            <p className={cardStyle.cardTitle}>New Bollywood</p>
        </div>
    </div>
  </Tooltip>

 
  )
}

export default Card