import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useAnyMovies from "../Hooks/useAnyMovies";

const Browse = () => {
  useNowPlayingMovies()
 
  useAnyMovies(["popular","upcoming","top_rated"])
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (<div>
    
 <PrimaryContainer/>
 <SecondaryContainer/>
    
    
    </div>);
};

export default Browse;
