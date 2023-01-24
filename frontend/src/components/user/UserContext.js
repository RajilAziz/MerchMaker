import { useState } from "react";
import { createContext } from "react";
//to create context
export const UserContext = createContext();
//to create provider
export const UserProvider = ({ children, currentUser }) => {
  //to share the data across the components
  const [loggedIn, setLoggedIn] = useState(currentUser !== null);

  const [avatar, setAvatar] = useState("");

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, avatar, setAvatar }}>
      {children}
    </UserContext.Provider>
  );
};