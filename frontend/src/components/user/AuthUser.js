import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Authorisor = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);

  if (currentUser === null) {
    Swal.fire({
      icon: "info",
      title: "Oops!!",
      text: "You need to be logged in",
    });
    return (
      <Navigate
        to="/main/signin
        "
      />
    );
  }

  return children;
};

export default Authorisor;