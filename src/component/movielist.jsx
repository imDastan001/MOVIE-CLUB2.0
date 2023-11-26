import Moviecard from "./moviecard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const movielist = ({ title, list }) => {
useEffect(()=>{
AOS.init({duration:2000})
},[])
  return (
    <>
        <div className="bg-zinc-900 rounded-xl m-3 pt-3" data-aos="fade-right">
        <div>
        <h2 className="font-bold text-2xl text-white ml-7 mb-3">{title}</h2>
        </div>
        
        <div className="flex flex-wrap  p-4">
          {list.map((x) => (
            <Moviecard
    
              key={x.id}
              id={x.id}
              poster={x.poster_path}
            />
          ))}
        </div>
      </div>
    
    </>
  );
};
export default movielist;
