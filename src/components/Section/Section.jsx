import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import sectionStyles from "./Section.module.css"
import CardSection from '../CardSection/CardSection';
import Carousel from '../Carousel/Carousel';
const Section = ({title, data, type, album}) => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className={sectionStyles.sectionWrapper}>
        <div className={sectionStyles.header}>
                <h3 className={sectionStyles.sectionTitle}>{title}</h3>
                <h4 className={sectionStyles.toggleText} onClick={handleToggle}>{!toggle ? "Collapse":"Show all" }</h4>
        </div>
        {
            data.length === 0 ? (
                <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
            ):(
                <div className={sectionStyles.sectionCardWrapper}>
                    {!toggle ? (<div className={sectionStyles.sectionCards}>
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

export default Section