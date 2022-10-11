import React from "react";
import {NavLink} from "react-router-dom"
const Notfound = () => {
  return (
    <div class="container-fluid">
      <img
        className="w-100"
        src="https://i.pinimg.com/564x/f9/9d/b4/f99db48931987b87ef5fef719bfec7af.jpg" width="600px" height="700px" 
        
        />
      
        {/* <h1>Error 404</h1>
        <p>Page not Found</p> */}
        
        <NavLink to="home">Go Back</NavLink>    
    </div>
  );
};

export default Notfound;