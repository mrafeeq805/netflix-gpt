import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const GPTMovieList = (props) => {
    console.log(props.data);

  return (
    <div>
        <h1 className='text-white text-lg font-bold mb-4'>{props.title}</h1>
        <div className='flex overflow-x-scroll gap-3 w-full'>
            {props.data.map(movie => movie.poster_path && <MovieCard key={movie.id} path={movie.poster_path}/>)}
        </div>
        

    </div>
  )
}

export default GPTMovieList