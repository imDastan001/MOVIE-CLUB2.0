import { useEffect } from "react";
import { API_Option } from "../utils/options";
import { useDispatch } from "react-redux";
import {
  addSelectedMovie,
  addSelectedMovieTrailer,
} from "../utils/selectedMovie";
import { MOVIE_URL } from "../utils/constant";
const useSelecteMovie = (id) => {
  const newid = id.id;
  const dispatch = useDispatch();
  const moviefetch = async () => {
    const response1 = await fetch(
      MOVIE_URL+ newid,
      API_Option
    );

    const data = await response1.json();
    dispatch(addSelectedMovie(data));

    const responcse2 = await fetch(
      MOVIE_URL+ newid + "/videos",
      API_Option
    );
    const responsetrailer = await responcse2.json();

    let trailer = responsetrailer.results.find(x=>x.type==="Trailer")
    if(!trailer){
      trailer = responsetrailer.results[0]
    }
    dispatch(addSelectedMovieTrailer(trailer));
  };
  useEffect(() => {
    moviefetch();

  }, [id]);
};
export default useSelecteMovie;
