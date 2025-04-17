import MovieCards from "./MovieCards";

const MovieList = ({title,data}) => {
   
  return (
   
    <div className="px-3">
        
        <h1 className=" text-sm md:text-2xl p-2 font-normal">{title}</h1>
      <div className="flex overflow-x-scroll  ">
        <div className="flex">
        {data?.map((movie)=>(<MovieCards  key={movie.id} movieTitle={movie.poster_path} />))}
        </div>
      </div>
      </div>
   
   
  );
};

export default MovieList;
