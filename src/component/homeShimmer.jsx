import { SHIMMER_BG } from "../utils/constant";
import MenuShimmer from "./menuShimmer"
const homeShimmer = () => {
  return (
    <>
      <div className="h-full p-3">
        <div className="rounded-xl relative bg-gradient-to-r from-gray-700 via-gray-600 to-gray-950 animate-pulse h-72">
          <div className={SHIMMER_BG+" bottom-16 "}></div>
          <div className={SHIMMER_BG+" bottom-20 mb-1"}></div>
          <div className={SHIMMER_BG+" bottom-24 mb-2"}></div>
        </div>
        <MenuShimmer/>
       
      </div>
      
    </>
  );
};
export default homeShimmer;
