import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMovieDetails } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useGetMovieDetails = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        getMovieList()
    },[])
    const getMovieList = async () =>{
        const data = await fetch(URL,API_OPTIONS)
        const json = await data.json()
        //console.log(json.results);
        dispatch(addMovieDetails(json.results))
    
    }
}
export default useGetMovieDetails