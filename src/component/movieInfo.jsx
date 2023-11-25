import { useSelector } from "react-redux";
import useSelecteMovie from "../hook/useSelectedMovie";
import DescMoviePoster from "./descMoviePoster";
import DescMovie from "./descMovie";
import YouMayLike from "./YouMayLike";
import { useParams } from "react-router-dom";

import HomeShimmer from "./homeShimmer";
import { useState } from "react";
import { IMG_URL } from "../utils/constant";
const movieinfo = () => {
  const [trailer, setisTrailer] = useState(false);
  const params = useParams()
  useSelecteMovie(params);
  const selectedMoviedata = useSelector(
    (store) => store.selected?.Selectedmovie
  );
  const selectedTrailer = useSelector((store) => store.selected?.Trailer);

  return !selectedMoviedata || !selectedTrailer ? (
    <HomeShimmer />
  ) : (
    <>
      <div className="relative bg-gray-800 pt-3 rounded-xl mb-3 mx-3">
        <img
          className="absolute inset-0  z-0 rounded-xl opacity-10"
          src={IMG_URL + selectedMoviedata.backdrop_path}
          alt="background poster"
        />
        <div className="relative z-10">
          {trailer ? (
            <DescMoviePoster trailer={selectedTrailer} />
          ) : (
            <DescMovie
              title={selectedMoviedata.original_title}
              overview={selectedMoviedata.overview}
              lang={selectedMoviedata.original_language}
              tag={selectedMoviedata.tagline}
              status={selectedMoviedata.status}
              runtime={selectedMoviedata.runtime}
              releasedate={selectedMoviedata.release_date}
              genres={selectedMoviedata.genres}
              vote={selectedMoviedata.vote_average}
              posterPath={selectedMoviedata.poster_path}
            />
          )}
          <button
            className="text-white bg-gray-900 py-2 w-48 my-4 ml-5 rounded-lg font-bold hover:bg-gray-600 hover:text-white"
            onClick={() => setisTrailer(!trailer)}
          >
            {trailer ? "Poster" : " ▶ Trailer"}
          </button>

          <YouMayLike
            genreid={selectedMoviedata.genres}
            moviename={selectedMoviedata.original_title}
          />
        </div>
      </div>
    </>
  );
};
export default movieinfo;
