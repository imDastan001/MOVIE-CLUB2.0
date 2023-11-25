import {IMG_URL} from "../utils/constant"
const poster = ({ backgroundPath}) => {

  return (
    <>
     
        <img
          className="rounded-xl opacity-40 h-96 sm:h-auto"
          src={IMG_URL + backgroundPath}
          alt="posterimg"
        />

    </>
  );
};
export default poster;
