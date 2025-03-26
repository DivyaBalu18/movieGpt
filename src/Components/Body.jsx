import React from "react";
import { BG_URL } from "../../utils/constants";
import Heading from "./Heading";
import { Outlet } from "react-router-dom";


const Body = () => {
  return (
    <div >
      <img src={BG_URL} className="overflow-hidden absolute w-screen h-screen  object-cover" />;
      <Heading />
      <Outlet/>
      
    </div>
  );
};

export default Body;
