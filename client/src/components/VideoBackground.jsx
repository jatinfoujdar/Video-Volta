import React from 'react'
import { API_OPTION } from '../util/constant'

const VideoBackground = ({movieId}) => {

  const getMovieVideos = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US', API_OPTION);
    const json = await data.json();
    console.log(json);
  }

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground