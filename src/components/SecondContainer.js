import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const data = useSelector((store) => store.movies)
  return (
    
    
    <div className='bg-black'>
      <div className='-mt-56 relative z-20'>
        {data.movieDetails && (
          <MovieList title={"Now Playing"} data={data.movieDetails}/>
        )}
        {data.popularMovies && (
          <MovieList title={"Popular Movies"} data={data.popularMovies}/>
        )}
        {data.topRatedMovies && (
          <MovieList title={"Top Rated Movies"} data={data.topRatedMovies}/>
        )}
        {data.upcomingMovies && (
          <MovieList title={"Upcoming Movies"} data={data.upcomingMovies}/>
        )}
        
      </div>
      

    </div>
  )
}

export default SecondContainer