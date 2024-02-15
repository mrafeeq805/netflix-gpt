import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { API_OPTIONS,URL } from "../utils/constants"

const usePopularMovies = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        getMovieList()
    },[])
    const getMovieList = async () =>{

        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
        
    
    }
}
export default usePopularMovies