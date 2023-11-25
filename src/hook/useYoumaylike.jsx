import { useEffect} from "react";
import { API_Option } from "../utils/options";
import { useDispatch } from "react-redux";
import {addYouMayLikeMovies} from "../utils/selectedMovie"
const useYoumaylike=(genreid,moviename)=>{
const genres = genreid.map(x=>x.id)
const newgenres=genres.slice(0,2)
const dispatch = useDispatch();
  const youMayLike = async() => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres="+newgenres,
    API_Option
  );
  const data = await response.json()
  const youmaylike = data.results.filter(x=>x.original_title!=moviename);
  dispatch(addYouMayLikeMovies(youmaylike));

};
useEffect(() => {
  youMayLike();
}, []);
}
export default useYoumaylike