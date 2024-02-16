import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMovieDetails, addTrailer, addTrailerVideo } from "../utils/movieSlice"
import { API_OPTIONS,URL } from "../utils/constants"

const useGetMovieDetails = () =>{
    const nowPlaying = useSelector((store) => store.movies?.movieDetails)
    const dispatch = useDispatch()
    useEffect(() =>{
      !nowPlaying && getMovieList()
    },[])
    const getMovieList = async () =>{
        const data = await fetch(URL,API_OPTIONS)
        const json = await data.json()
        const data2 = await fetch("https://api.themoviedb.org/3/movie/"+json.results[0].id+"/videos",API_OPTIONS)
        const json2 = await data2.json()
        dispatch(addTrailerVideo(json2.results[0]))
        dispatch(addMovieDetails(json.results))
        dispatch(addTrailer(json.results[0]))
        
    
    }
}
export default useGetMovieDetails