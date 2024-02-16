import React from 'react'
import { useSelector } from 'react-redux'

const VideoDetails = () => {
  const details = useSelector(store => store.movies.trailer)
  return (
    <div className='bg-black w-screen aspect-video bg-gradient-to-r from-black md:absolute p-6'>
      <div className='space-y-4 absolute md:-mt-96 md:w-4/12 md:top-0 top-[50%]'>
        <h1 className='text-lg md:text-4xl font-bold text-white'>{details?.title}</h1>
        <p className='text-white text-xs md:text-base'>{details?.overview}</p>
        <div className='flex gap-4 my-3 w-max'>
          <button className='bg-white gap-2 h-max p-1.5 px-4 rounded-md md:p-2 md:px-6 md:rounded-lg flex justify-center items-center'>
            <span className='material-symbols-outlined'>play_arrow</span>
            <span>Play</span>
          </button>
          <button className='bg-gray-500 bg-opacity-60 gap-2 h-max p-1.5 px-4 rounded-md md:p-2 md:px-6 md:rounded-lg w-max flex justify-center items-center'>
            <span className='material-symbols-outlined text-white'>info</span>
            <span className='text-white'>More Info</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default VideoDetails