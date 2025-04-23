import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const MovieTrailer = ({ movieId }) => {

  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie?.trailer);
  

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video -mt-3"
        src={"https://www.youtube-nocookie.com/embed/"+trailer?.key+"?&autoplay=1&mute=1&rel=0&amp;controls=0&&loop=1&&playlist="+trailer?.key}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
