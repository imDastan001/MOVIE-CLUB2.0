import { useSelector } from "react-redux";
import useMovie from "../hook/useMovie";
import Poster from "../component/poster";
import PosterDesc from "../component/posterdesc";
import HomeShimmer from "./homeShimmer"


const primaryScreen = () => {

  useMovie();
  const Moviedata = useSelector((store) => store.movies?.NowPlayingMovies);
  ;



  return (!Moviedata)?(<HomeShimmer/>):(

    <>
    <div className="bg-gray-950 p-3 relative">
      <Poster backgroundPath={Moviedata[0].backdrop_path}/>
      <PosterDesc title={ Moviedata[0].original_title} movieid={Moviedata[0].id} overview={ Moviedata[0].overview}/>
      </div>
    </>
  );
};
export default primaryScreen;
