import {IMG_URL, IMG_URL_Background} from "../utils/constant"
const poster = ({ backgroundPath}) => {

  return (
    <>
     
        <img
          className="rounded-xl  opacity-50 h-96 sm:h-auto"
          src={IMG_URL_Background + backgroundPath}
          alt="posterimg"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black opacity-60"></div>

    </>
  );
};
export default poster;
