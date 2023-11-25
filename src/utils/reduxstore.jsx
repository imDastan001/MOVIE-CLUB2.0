import { configureStore } from "@reduxjs/toolkit";
import allmoviesReducer from "./allmovie"
import selectedMovieReducer from "./selectedMovie"
import searchkey from "./searchkey";
const appStore=configureStore({
    reducer:{
        movies:allmoviesReducer,
        selected:selectedMovieReducer,
        searchkey:searchkey
    }
})
export default appStore;