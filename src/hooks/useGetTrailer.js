import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"

const useGetTrailer = () =>{
    const details = useSelector((store) => store.movies?.trailer)
    const dispatch =useDispatch()
    useEffect(() =>{
       !details && getApi(details?.id)

    },[])
    const getApi = async (id) =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_OPTIONS)
        const json = await data.json()
        dispatch(addTrailerVideo(json.results[0]))
    
    }
}
export default useGetTrailer