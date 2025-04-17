import { useEffect } from "react";
import { options } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularList, addTopRatedList,addUpcomingList } from "../../utils/movieSlice";

const useAnyMovies = ( movies ) => {
  
  const dispatch = useDispatch();
  console.log(movies)

  const NowMovies = async (movie) => {
    try {
        console.log(movie)
      const url =
        "https://api.themoviedb.org/3/movie/" + movie  + "?page=1";
      console.log(url)
      const movielist = await fetch(url, options);

      const movielist_json = await movielist.json();
      console.log(movielist_json)
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
    movies.map((movie)=> {console.log(movie);NowMovies(movie)})
    
  }, []);
};

export default useAnyMovies;
