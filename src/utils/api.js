 import axios from "axios";


const BASE_URL="https://api.themoviedb.org/3"

// const TMDB_TOKEN=import.meta.env.VITE_TMDB_TOKEN;
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTBmNTEwNDYwNGIxNDRjZDU2NmI1MjYyNzI0ZGFkZSIsInN1YiI6IjY1YTkzOWQxNmY5NzQ2MDEzN2Q5MTAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EivSdUqIiKurqtYmvHFKNjAgFX_sODCt0LJ931NVBrs"

const headers={
    Authorization:"bearer "+
    TMDB_TOKEN,
}

export const fetchDataFromApi=async(url,params)=>{
    try{
       const {data}=await axios.get
       (BASE_URL+url,{
        headers,
        params
      
       })
       return data;
    }catch(err){
        console.log(err)
        return err;

    }
}