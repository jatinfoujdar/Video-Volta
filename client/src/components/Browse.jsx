import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTION } from '../util/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../util/movieSlice'

const Browse = () => {


  return (
    <div>
      <Header/>
    </div>
    
  )
}

export default Browse