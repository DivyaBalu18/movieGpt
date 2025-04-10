import React from "react";
import MovieTitle from "./MovieTitle"

import { useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";

const PrimaryContainer = () => {
    const movielist=useSelector(store=>store.movie.nowPlaying)
    if(!movielist) return
    
    const movie =movielist[0]
    const {id,original_title,overview}=movie

    

  return (<div>

    <MovieTitle title={original_title} overview={overview} />
    <MovieTrailer movieId={id} />
  </div>)
};

export default PrimaryContainer;
