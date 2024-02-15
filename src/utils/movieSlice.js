import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        movieDetails :null,
        trailer : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null
    },
    reducers : {
        addMovieDetails : (state,action) =>{
            state.movieDetails = action.payload
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload
        },
        addTrailer : (state,action) =>{
            state.trailer = action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addUpcomingMovies,addMovieDetails, addTrailer,addTrailerVideo,addPopularMovies,addTopRatedMovies} = movieSlice.actions
export default movieSlice.reducer