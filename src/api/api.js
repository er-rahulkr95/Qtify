import axios from "axios" ;

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do"


export const fetchTopAlbums = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export const fetchNewAlbums = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export const fetchSongs = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}


export const fetchGenresList = async ()=>{
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}