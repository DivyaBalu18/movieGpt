import MovieList from "./MovieList"
import { useSelector } from "react-redux"


const SecondaryContainer = () => {
  const movie=useSelector(state=>state.movie)
  return (
    
    <div className="bg-black text-white h-screen">
     <div className=" relative z-20  pl-2 lg:pl-12  -mt-5 md:-mt-14  lg:-mt-52">
     <MovieList  title="Now Playing"  data={movie?.nowPlaying}  />
     <MovieList  title="Popular"  data={movie.popular}  />
     <MovieList  title="Top Rated"  data={movie.topRated}  />
     <MovieList  title="Upcoming"  data={movie.upcoming}  />

    </div>
    </div>
  )
}

export default SecondaryContainer