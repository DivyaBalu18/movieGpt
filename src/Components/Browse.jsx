import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()
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
