import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS,URL } from "../utils/constants"

const useTopRatedMovies = () =>{
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies)
    const dispatch = useDispatch()
    useEffect(() =>{
       !topRatedMovies && getMovieList()
    },[])
    const getMovieList = async () =>{

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
        
    
    }
}
export default useTopRatedMovies