import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTION } from '../util/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../util/movieSlice'

const Browse = () => {
   const dispatch = useDispatch(); 

const getNowPlaying = async () => {
const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
  API_OPTION
);
const json = await data.json();
console.log(json.results);
dispatch(addNowPlayingMovies(json.results));
}
useEffect(()=>{
getNowPlaying();
},[])

  return (
    <div>
      <Header/>
    </div>
    
  )
}

export default Browse