import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Contact from "./components/main/Contact";

import Home from "./components/main/Home";
import Resetpassword from "./components/main/Resetpassword";
import Dashboard from "./components/admin/Dashboard";
import Manageuser from "./components/admin/Manageuser";
import AdminProfile from "./components/admin/AdminProfile";
import Admin from "./components/admin";
import UserManager from "./components/main/UserManager";

import User from "./components/user";
import Customiser from "./components/user/Customiser";
import Notfound from "./components/main/NotFound";
import Userprofile from "./components/user/Userprofile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
          <Route path="home" element={<Home />} />
            <Route element={<Login />} path="login" />
            <Route path="signup" element={<Signup />} />

            <Route path="contact" element={<Contact />} />
            
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="usermanager" element={<UserManager />} />
            <Route path="*" element={<Notfound/>} />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manageuser" element={<Manageuser />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          <Route element={<User />} path="user">
            <Route path="customiser" element={<Customiser />} />
            <Route path="userprofile" element={<Userprofile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
