import { createSlice } from "@reduxjs/toolkit"

const allmovie=createSlice({
    name:"allMovies",
    initialState:{
        NowPlayingMovies:null,
        PopularMovies:null,
        TopRated:null,
        Upcoming:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRated:(state,action)=>{
            state.TopRated=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.Upcoming=action.payload;
        }
    }
})

export const {addNowPlaying ,addPopularMovies, addTopRated ,addUpcoming}=allmovie.actions;
export default allmovie.reducer ;