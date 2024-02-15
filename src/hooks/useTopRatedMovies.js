import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS,URL } from "../utils/constants"

const useTopRatedMovies = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        getMovieList()
    },[])
    const getMovieList = async () =>{

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
        
    
    }
}
export default useTopRatedMovies