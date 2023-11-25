import { IMG_URL } from "../utils/constant";

const descMovie = ({
  title,
  overview,
  lang,
  tag,
  status,
  runtime,
  releasedate,
  genres,
  vote,
  posterPath,
}) => {
 const rvote = vote.toFixed(1)
  return (
   <> 
      <div className="pl-5 md:flex gap-8">
        <img
          className="rounded-xl w-48 mt-9"
          src={IMG_URL+ posterPath}
          alt="poster"
        />
        <div className="text-white mb-3 mt-9">
          <h1 className="text-2xl font-bold my-2 lg:text-4xl">{title}</h1>
          <p className=" text-xs lg:text-sm mb-1  text-gray-400">
            ⭐{rvote} ~ {runtime}Min ~ {lang}
          </p>
          <p className="text-xs lg:text-sm mb-1 text-gray-400">
            {genres.map((x) => x.name).join(", ")}
          </p>
          <p className="text-xs lg:text-sm text-gray-400">
            {status} ~ {releasedate}
          </p>
          <p className="sm:text-sm md:w-1/2 w-3/5 my-3 text-xs lg:text-lg">{overview}</p>
          <p className="sm:text-sm text-xs lg:text-lg">{tag}</p>
       
        </div>
      </div>
    </>
  );
};
export default descMovie;
