import { useRef } from "react";
import openai from "../../utils/openAi";
import { useDispatch } from "react-redux";
import { addGptSearch, addMovies } from "../../utils/gptSlice";

import { useNavigate } from "react-router-dom";
import { options } from "../../utils/constants";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useRef("");
  const fetchMovie = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, options);
    const tmbd_results = await data.json();

    return tmbd_results.results;
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        search.current.value +
        ". only give me names of 5 movies, array of comma seperated values like the example result given ahead. Example Result: [Gadar, Sholay, Don, Golmaal, Koi Mil Gaya]";

      const gptmovies = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!gptmovies.choices) {
        // TODO: Write Error Handling
      }
      const movies = gptmovies.choices?.[0]?.message?.content.split(",");

      dispatch(addGptSearch(movies));
      const tmdb_movie = movies.map((movie) => fetchMovie(movie));
      const tmdb_result = await Promise.all(tmdb_movie);

      dispatch(addMovies(tmdb_result));
      navigate("/search", { state: { search: search.current.value } });
    }
  };
  return (
    <div>
      <label className="w-96 border-white/60 shadow-xl input  input-sm bg-black text-white  ">
        <svg
          className="h-[1.5em] opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="9"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          ref={search}
          className=" bg-black text-white"
          onKeyDown={(e) => handleSearch(e)}
          placeholder="Search"
        />
        <kbd className="kbd kbd-sm bg-black text-white">⌘</kbd>
        <kbd className="kbd kbd-sm bg-black text-white">K</kbd>
      </label>
    </div>
  );
};

export default Search;
