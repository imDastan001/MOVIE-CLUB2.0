import { createSlice } from "@reduxjs/toolkit";
const SelectedMovie=createSlice({
name:"selectedMovie",
initialState:{
    Selectedmovie:null,
    Trailer:null,
    maylike:null
},
reducers:{
    addSelectedMovie:(state,action)=>{
        state.Selectedmovie = action.payload;
    },
    removeSelectedMovie:(state)=>{
        state.Selectedmovie = null;
        state.Trailer = null;
        state.maylike = null;
    },
    addSelectedMovieTrailer:(state,action)=>{
        state.Trailer = action.payload;
    },
    addYouMayLikeMovies:(state,action)=>{
        state.maylike = action.payload;
    },
  
}



})

export const {addSelectedMovie,addSelectedMovieTrailer,removeSelectedMovie,addYouMayLikeMovies} = SelectedMovie.actions
export default SelectedMovie.reducer