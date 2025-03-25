import React from "react";
import { BG_URL } from "../../utils/constants";
import Heading from "./Heading";
import { Outlet } from "react-router-dom";


const Body = () => {
  return (
    <div className="overflow-hidden">
      <img src={BG_URL} className="overflow-hidden absolute h-screen object-cover" />;
      <Heading />
      <Outlet/>
      
    </div>
  );
};

export default Body;
