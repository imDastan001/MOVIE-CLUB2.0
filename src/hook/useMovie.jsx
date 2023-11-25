import { addNowPlaying , addUpcoming,addPopularMovies,addTopRated} from "../utils/allmovie";
import { MOVIE_URL } from "../utils/constant";
import { API_Option } from "../utils/options";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const useMovie = () => {

  const dispatch = useDispatch();
  const fetchdata = async () => {
    const response1 = await fetch(
      MOVIE_URL+"now_playing?page=1",
      API_Option
    );
    const response2 = await fetch(
      MOVIE_URL+"popular?page=1",
      API_Option
    );
    const response3 = await fetch(
      MOVIE_URL+"top_rated?page=1",
      API_Option
    );
    const response4 = await fetch(
      MOVIE_URL+"upcoming?page=1",
      API_Option
    ); 
    const [res1, res2, res3, res4] = await Promise.all([response1, response2, response3, response4]);
    
    const nowplay = await res1.json();
    const popular = await res2.json();
    const toprated = await res3.json();
    const upcoming = await res4.json();




    dispatch(addNowPlaying(nowplay.results));
    dispatch(addPopularMovies(popular.results));
    dispatch(addTopRated(toprated.results));
    dispatch(addUpcoming(upcoming.results));
  };
  useEffect(() => {
    fetchdata();
  }, []);
};
export default useMovie;
