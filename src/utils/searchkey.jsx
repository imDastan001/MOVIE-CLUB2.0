import { createSlice } from "@reduxjs/toolkit";
const searchkey = createSlice({
name:"searchkey",
initialState:{
    searchMovies:null
},
reducers:{
    addSearchMovies:(state,action)=>{
        state.searchMovies=action.payload
    },
    removeSearchMovies:(state,action)=>{
        state.searchMovies=null
    }
}



})
export const{addSearchMovies,removeSearchMovies}=searchkey.actions
export default searchkey.reducer