import React from "react";
import { Outlet } from "react-router-dom";
import Navigationbar from "./Navigationbar";


const User = () => {
  return(
    <div>
     <Navigationbar/>
     <Outlet/>
    </div>
  ) 

  
};

export default User;
