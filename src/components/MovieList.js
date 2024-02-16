import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data,title}) => {
  return (
    <div className='p-6'>
        <h1 className='font-bold text-2xl text-white'>{title}</h1>
        <div className='flex gap-4 mt-3 overflow-x-scroll '>
            {data.map(movie => <MovieCard key={movie.id} path={movie.poster_path}/>)}
            
        </div>
        
    </div>
  )
}

export default MovieList