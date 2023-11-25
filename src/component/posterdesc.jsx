import { Link } from "react-router-dom";
import {removeSelectedMovie} from "../utils/selectedMovie"
import { useDispatch } from "react-redux";
const posterdesc = ({ title, movieid, overview }) => {
const dispatch =useDispatch();
  return (
    <>
      <div className="absolute bottom-3 p-4 lg:bottom-20 xl:bottom-60">
        <h1 className="text-white text-lg  font-bold sm:text-2xl xl:text-4xl">{title}</h1>
        <p className="text-white line-clamp-3 text-xs w-1/2 md:line-clamp-none sm:text-sm xl:text-lg">{overview}</p>
        <Link to={"movieinfo/" + movieid}>
          <button 
          className="text-white bg-gray-900 py-2 px-8 mt-4 rounded-lg font-bold hover:bg-gray-600 hover:text-white lg:px-20"
          onClick={()=>dispatch(removeSelectedMovie())}
          >

            Play
          </button>
        </Link>
      </div>
    </>
  );
};
export default posterdesc;
