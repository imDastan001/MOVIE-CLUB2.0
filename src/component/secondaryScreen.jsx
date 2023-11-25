import { useSelector } from "react-redux";
import MovieList from "./movielist";




const secondaryScreen = () => {
  const nowPlaying = useSelector((store) => store.movies?.NowPlayingMovies);
  const popular = useSelector((store) => store.movies?.PopularMovies);
  const Toprated = useSelector((store) => store.movies?.TopRated);
  const Upcoming = useSelector((store) => store.movies?.Upcoming);

  if (!nowPlaying || !popular || !Toprated || !Upcoming) return;
  const category = [
    {
      title: "Now Playing",
      data: nowPlaying,
    },
    {
      title: "Popular",
      data: popular,
    },
    {
      title: "Top Rated",
      data: Toprated,
    },
    {
      title: "Upcoming",
      data: Upcoming,
    },
  ];

  return (
    <>
     

      {category.map((x, index) => (
        <MovieList key={index} title={x.title} list={x.data.slice(1, 10)} />
      ))}
  

    </>
  );
};
export default secondaryScreen;
