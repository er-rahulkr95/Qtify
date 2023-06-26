import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "./AlbumSection.module.css"
import CardSection from '../CardSection/CardSection';
import Carousel from '../Carousel/Carousel';
import SongsGenreTab from '../SongsGenreTab/SongsGenreTab';
const AlbumSection = ({title, data, type, genresList, value, handleChange}) => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }


  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.header}>
                <h3 className={styles.sectionTitle}>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{!toggle ? "Collapse":"Show all" }</h4>
        </div>
        {
            data.length === 0 ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                 </Box>
            ):(
                <div className={styles.sectionCardWrapper}>
                    {!toggle ? (<div className={styles.sectionCards}>
                        {
                            data.map((item)=>(
                                <CardSection key={item.id} data={item} type={type}/>
                            ))
                        }
                    </div>):(<Carousel data={data} component={(data)=><CardSection data={data} type={type}/>}/>)}
                </div>
            )
        }
    </div>
  )
}

export default AlbumSection