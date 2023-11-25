import { useParams } from "react-router-dom";
import useSearchedMovie from "../hook/useSearchedMovie"
import { useSelector } from "react-redux";
import HomeShimmer from "./homeShimmer"
import MovieList from "./movielist"
const searchmovie=()=>{
    const name = useParams().name
    useSearchedMovie(name)
    const searchmoves= useSelector(store=>store.searchkey?.searchMovies)
    


    return (!searchmoves)?<HomeShimmer/>:(
    
        
        <>
       
        <div className="bg-zinc-900 py-3 px-3 rounded-xl mb-3 mx-3">
       {(searchmoves.length===0)?
        <h1 className="text-red-600">No Result Found</h1>:
         <>
           <h1 className="text-red-600">Results for</h1>
            <p className="text-3xl text-white font-mono font-bold">{name}</p>
        
        <MovieList list={searchmoves} />):
        </>
    }
        </div>
        </>
    )
}
export default searchmovie