import React, { useEffect, useState } from 'react'
import NavBar from "../components/NavBar/NavBar"
import Hero from '../components/Hero/Hero'
import { fetchTopAlbums } from '../api/api.js';
import Card from '../components/Card/Card';


const QtifyHome = () => {
  const [topAlbums,setTopAlbums] =  useState([]);
  const generateData = async()=>{
    try{
      const topAlbumsData = fetchTopAlbums()
      setTopAlbums(topAlbumsData)
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
        <Card/>
    </div>
  )
}

export default QtifyHome