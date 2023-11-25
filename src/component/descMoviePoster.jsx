import { YOUTUBE_ALLOW, YOUTUBE_AUTOPLAY, YOUTUBE_TITLE, YOUTUBE_URL } from "../utils/constant";

const descMoviePoster=({trailer})=>{
    return(
        <>
        <div className="mx-5">
            <iframe
              className="rounded-xl opacity-80 w-full "
              height="550"
              src={YOUTUBE_URL + trailer.key +YOUTUBE_AUTOPLAY}
              title={YOUTUBE_TITLE}
              allow={YOUTUBE_ALLOW}
            ></iframe>
       
          </div>
        

        </>
    )
};
export default descMoviePoster;


