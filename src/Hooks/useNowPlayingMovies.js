import  { useEffect } from "react";
import { options } from "../../utils/constants";
 import {useDispatch} from "react-redux"
 import { addMoviesList } from "../../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const NowPlayingMovies = async () => {
      try {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
  
      const movielist=await fetch(url, options)
    
      const movielist_json = await movielist.json();
      dispatch(addMoviesList(movielist_json.results))
      console.log(movielist_json.results)
      }
      catch(err)
      {
          console.error(err)
      }
      
    
    };
    useEffect(()=>{NowPlayingMovies()},[])
}

export default useNowPlayingMovies