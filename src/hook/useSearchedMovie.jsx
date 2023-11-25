import { API_Option } from "../utils/options";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addSearchMovies} from "../utils/searchkey"
import { MOVIE_URL_SEARCH } from "../utils/constant";
const useSearchedMovie = (searchvalue) => {

const dispatch = useDispatch();
const fetchdata = async () => {
  const val = encodeURIComponent(searchvalue)
    const response1 = await fetch(
      MOVIE_URL_SEARCH+"search/movie?query="+val+"&include_adult=false&page=1",
      API_Option
    );
    const data = await response1.json();
    const movies = data.results.filter(x=>x.poster_path!==null)
    dispatch(addSearchMovies(movies))
}
useEffect(()=>{
fetchdata()
},[])
}
export default useSearchedMovie