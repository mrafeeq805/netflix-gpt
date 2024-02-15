import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        movieDetails :null,
        trailer : null,
        trailerVideo : null
    },
    reducers : {
        addMovieDetails : (state,action) =>{
            state.movieDetails = action.payload
        },
        addTrailer : (state,action) =>{
            state.trailer = action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addMovieDetails, addTrailer,addTrailerVideo} = movieSlice.actions
export default movieSlice.reducer