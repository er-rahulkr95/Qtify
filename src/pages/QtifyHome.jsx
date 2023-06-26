import React, { useEffect, useState } from 'react'
import NavBar from "../components/NavBar/NavBar"
import Hero from '../components/Hero/Hero'
import { fetchGenresList, fetchNewAlbums, fetchSongs, fetchTopAlbums } from '../api/api.js';
import AlbumSection from '../components/AlbumSection/AlbumSection';
import qtifyHomeStyles from "./QtifyHome.module.css"
import SongSection from '../components/SongSection/SongSection';
import faqsData from "../data/faqsData.json"
import FaqsSection from '../components/FaqsSection/FaqsSection';
const QtifyHome = () => {
  const [topAlbums,setTopAlbums] =  useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([])
  const [genresList, setGenresList] = useState([{key:"all", label:"All"}])
  const[filteredSong,setFilteredSong] = useState([])
  const generateData = async()=>{
   
    try{
      const topAlbumsData = await fetchTopAlbums()
      const newAlbumsData = await fetchNewAlbums()
      const genresData = await fetchGenresList();
      const songsData = await fetchSongs();
      setTopAlbums(topAlbumsData)
      setNewAlbums(newAlbumsData)
      setSongs(songsData)
      setFilteredSong(songsData)
      setGenresList([...genresList,...genresData.data])
    }catch(error){
      console.log(error);
    }
  }


  useEffect(()=>{
    generateData()
  },[]);



  return (
    <div>
        <NavBar/>
        <Hero/>
        <section className={`${qtifyHomeStyles.sections}`}>
        <AlbumSection title="Top Albums" data={topAlbums} type="album"/>
        <AlbumSection title="New Albums" data={newAlbums} type="album"/>
        <hr className={`${qtifyHomeStyles.divider}`}/>
        <SongSection title="Songs" songsData={filteredSong} type="songs" allSongs ={songs} setFilteredSong={setFilteredSong} genresList={genresList}/>
        <hr className={`${qtifyHomeStyles.divider}`}/>
        <FaqsSection faqs={faqsData}/>
        </section>
      
    </div>
  )
}

export default QtifyHome