import MovieList from "./movielist";
import useYoumaylike from "../hook/useYoumaylike"
import { useSelector } from "react-redux";
import MenuShimmer from "./menuShimmer"
const YouMayLike = ({ genreid,moviename }) => {
useYoumaylike(genreid,moviename)
const maylikemovies = useSelector((store) => store.selected?.maylike);


  return (!maylikemovies)? <MenuShimmer/>
 : (
    <>
      <div className="bg-zinc-900 rounded-b-xl pt-3">
        <MovieList title={"You May Like"} list={maylikemovies} />
        </div>
    </>
  );
};
export default YouMayLike;
