import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4 '>{overview}</p>
        <div>
            <button className='text-black bg-gray-500 font-bold py-2 px-4 rounded bg-opacity-30' > ▶ Play</button>
            <button className='text-black bg-gray-500 font-bold mx-2 py-2 px-4 rounded bg-opacity-30' >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle