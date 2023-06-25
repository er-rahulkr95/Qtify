import React, { useEffect, useState } from 'react'
import NavBar from "../components/NavBar/NavBar"
import Hero from '../components/Hero/Hero'
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from '../api/api.js';
import Section from '../components/Section/Section';
import qtifyHomeStyles from "./QtifyHome.module.css"

const QtifyHome = () => {
  const [topAlbums,setTopAlbums] =  useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([])
  const generateData = async()=>{
    try{
      const topAlbumsData = await fetchTopAlbums()
      const newAlbumsData = await fetchNewAlbums()
      const songsData = await fetchSongs();

      console.log(topAlbumsData)
      setTopAlbums(topAlbumsData)
      setNewAlbums(newAlbumsData)
      setSongs(songsData)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    generateData()
  },[]);

console.log(newAlbums)
  return (
    <div>
        <NavBar/>
        <Hero/>
        <section className={`${qtifyHomeStyles.sections}`}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <hr className={`${qtifyHomeStyles.divider}`}/>
        <Section title="Songs" data={songs} type="songs"/>
        <hr className={`${qtifyHomeStyles.divider}`}/>
       
        </section>
        
       
       
    </div>
  )
}

export default QtifyHome