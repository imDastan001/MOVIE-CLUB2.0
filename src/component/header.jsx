import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Search from "../assets/searchbtn2.png";
import { useState ,useRef } from "react";
import {removeSearchMovies} from "../utils/searchkey"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const header = () => {
  const prevSearch = useRef("")
  const navigate = useNavigate();
const handle=(e)=>{
  if(e.key==="Enter" ||e.type === 'click'){
      const destination = seesearch.length === 0 ? '/' : "/search/"+seesearch;
      if (seesearch.length > 0 && seesearch !== prevSearch.current) {

        dispatch(removeSearchMovies());
        prevSearch.current = seesearch;
      }  

      navigate(destination);
  }
}
  const dispatch=useDispatch()


    const [seesearch , setSeeSearch] = useState("")
  
  return(
    <>
      <div className="px-2 pt-2 mb-6 flex bg-gray-950 justify-between">
        <div className="w-28 mt-2 lg:w-44">
          <Link to="/">
 
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex">

            <input
              className="rounded-tl-md rounded-bl-md pl-2  py-1 mb-3 w-40 lg:py-2 focus:outline-none bg-slate-800 text-white"
              type="text"
              placeholder="Search"
              value={seesearch}
              onChange={(e)=>(setSeeSearch(e.target.value))}
              onKeyDown={handle}
            />
          

            <Link to= {seesearch.length===0 ?"/": "/search/"+seesearch} onClick={handle}> <button 
            className="bg-slate-800 rounded-tr-md rounded-br-md py-1 p-1 mb-3 lg:py-2 mr-2 hover:bg-slate-600"
            
            >
              <img src={Search} alt="" />
            </button>
            </Link>
        </div>

      </div>
    </>
  
  );
  
};
export default header;
