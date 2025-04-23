import  { useEffect } from "react";
import { options } from "../../utils/constants";
 import { useDispatch } from "react-redux";
 import { addTrailer } from "../../utils/movieSlice";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";
  
      const trailer_result = await fetch(url, options)
      
      const trailer_json = await trailer_result.json();
      
      const filter_result=trailer_json.results.filter((video)=>video.name==="Official Trailer")
       
      const trailer=filter_result?filter_result[0]:trailer_json.results[0]
      
      dispatch(addTrailer(trailer));
    };
  
    useEffect(() => {
      getMovieTrailer();
    }, []);

}

export default useMovieTrailer;