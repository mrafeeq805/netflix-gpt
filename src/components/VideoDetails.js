import React from 'react'
import { useSelector } from 'react-redux'

const VideoDetails = () => {
  const details = useSelector(store => store.movies.trailer)
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black absolute p-6'>
      <div className='space-y-4 absolute w-4/12 top-[30%]'>
        <h1 className='text-4xl font-bold text-white'>{details?.title}</h1>
        <p className='text-white'>{details?.overview}</p>
        <div className='flex gap-4 my-3'>
          <button className='bg-white gap-2 p-2 px-6 rounded-lg flex justify-center items-center'>
            <span className='material-symbols-outlined'>play_arrow</span>
            <span>Play</span>
          </button>
          <button className='bg-gray-500 bg-opacity-60 gap-2 p-2 px-6 rounded-lg flex justify-center items-center'>
            <span className='material-symbols-outlined text-white'>info</span>
            <span className='text-white'>More Info</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default VideoDetails