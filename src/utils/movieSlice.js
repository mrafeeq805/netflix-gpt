import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        movieDetails :null
    },
    reducers : {
        addMovieDetails : (state,action) =>{
            state.movieDetails = action.payload
        }
    }
})

export const {addMovieDetails} = movieSlice.actions
export default movieSlice.reducer