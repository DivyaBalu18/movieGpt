const MovieCards = ({movieTitle}) => {
  return ( 
  <div  className=" w-24 md:w-36 hover:w-28 hover:md:w-40 pr-4" >
    
      <img alt="movie poster "  src={"https://image.tmdb.org/t/p/w500/"+movieTitle}/>  
        
       
  </div>
)
};

export default MovieCards;
