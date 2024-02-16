import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { API_OPTIONS,URL } from "../utils/constants"

const usePopularMovies = () =>{
    const popularMovies = useSelector((store) => store.movies?.popularMovies)
    const dispatch = useDispatch()
    useEffect(() =>{
        !popularMovies && getMovieList()
    },[])
    const getMovieList = async () =>{

        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
        
    
    }
}
export default usePopularMovies