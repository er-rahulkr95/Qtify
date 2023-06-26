import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carousel from '../Carousel/Carousel';
import CardSection from '../CardSection/CardSection';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const SongsGenreTab = ({genresList, songsData, allSongs, type, setFilteredSong}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  
  };

  const genreateFilteredData = (genreKey) =>{
        const filteredData = allSongs.filter(songs=>songs.genre.key.toLowerCase() === genreKey.toLowerCase())
        return filteredData;
  }

useEffect(()=>{
  if(value === 0){
    setFilteredSong(allSongs)
  }
  if(value!==0){
    for(let i=1; i<genresList.length; i++){
      if(value === i){
           const filteredSongData= genreateFilteredData(genresList[i].key)
           setFilteredSong(filteredSongData);
           break;
       }
     }
  
  }
},[value])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor='primary' aria-label="basic tabs example">
          {genresList.map((genres,index)=>(
            <Tab key={genres.key} label={genres.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {genresList.map((item,index)=>(
      <TabPanel key={index} value={value} index={index}>
        <Carousel data={songsData} component={(songsData)=><CardSection data={songsData} type={type}/>}/>
      </TabPanel>))}
     
    </Box>
  );
}

export default SongsGenreTab