import { useEffect } from "react";
import { options } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularList, addTopRatedList,addUpcomingList } from "../../utils/movieSlice";

const useAnyMovies = ( movies ) => {
  
  const dispatch = useDispatch();


  const NowMovies = async (movie) => {
    try {
        
      const url =
        "https://api.themoviedb.org/3/movie/" + movie  + "?page=1";
      
      const movielist = await fetch(url, options);

      const movielist_json = await movielist.json();
      
      if (movie == "popular") dispatch(addPopularList(movielist_json.results));
      else if (movie == "top_rated")
        dispatch(addTopRatedList(movielist_json.results));
      else if (movie == "upcoming")
        dispatch(addUpcomingList(movielist_json.results));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    movies.map((movie)=> {NowMovies(movie)})
    
  }, []);
};

export default useAnyMovies;
