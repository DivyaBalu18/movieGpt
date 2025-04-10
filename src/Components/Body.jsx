import React, { useEffect } from "react";

import Heading from "./Heading";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
;

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
 
        dispatch(addUser({ uid, email, displayName })); 
        
      } else {
        dispatch(removeUser());
      }
      //unsubsribe when component unsubscribe
      return ()=>unsubscribe()
    });
  },[]);

  return (
    <div>
      <Outlet />
      <Heading />
    </div>
  );
};

export default Body;
