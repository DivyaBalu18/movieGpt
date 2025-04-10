import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const MovieTrailer = ({ movieId }) => {

  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie?.trailer);
  

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube-nocookie.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        
        
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
