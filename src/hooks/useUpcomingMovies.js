import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice"
import { API_OPTIONS,URL } from "../utils/constants"

const useUpcomingMovies = () =>{
    const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies)
    const dispatch = useDispatch()
    useEffect(() =>{
       !upcomingMovies && getMovieList()
    },[])
    const getMovieList = async () =>{

        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
        
    
    }
}
export default useUpcomingMovies