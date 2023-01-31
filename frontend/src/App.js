import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Contact from "./components/main/Contact";
import Home from "./components/main/Home";
import Resetpassword from "./components/main/Resetpassword";
import Dashboard from "./components/admin/Dashboard";
import AdminProfile from "./components/admin/AdminProfile";
import Admin from "./components/admin";
import UserManager from "./components/main/UserManager";
import User from "./components/user";
import Customiser from "./components/user/Customiser";
import Notfound from "./components/main/NotFound";
import Userprofile from "./components/user/Userprofile";
import CheckoutForm from "./components/main/CheckoutForm";
import ProductListing from "./components/main/ProductListing";

import AboutUs from "./components/main/AboutUs";
import ManageOrder from "./components/admin/ManageOrder";

import { UserProvider } from "./components/user/UserContext";
import Authorisor from "./components/user/AuthUser";
import Footer from "./components/main/Footer";
import Navbar from "./components/main/Navbar";
import Navigationbar from "./components/user/Navigationbar";
import UserProfile1 from "./components/main/UserProfile1";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const stripe = loadStripe(
    "pk_test_51LojzRSH0DkD8It1V0m2Gisxfk8s3M6OYwwPyAMkwnwJ9rPkJJ6WznbKZk1ve89rc2GyZCyHh2N7q8PbwBiDoRdE00rtbPoOiI"
  );

  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route element={<Main />} path="main">
              <Route path="home" element={<Home />} />
              <Route element={<Login />} path="signin" />
              <Route path="signup" element={<Signup />} />
              <Route path="checkoutform" element={<CheckoutForm />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resetpassword" element={<Resetpassword />} />
              <Route path="usermanager" element={<UserManager />} />
              <Route path="productlisting" element={<ProductListing />} />
              <Route path="footer" element={<Footer />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="*" element={<Notfound />} />
            </Route>

            <Route element={<Admin />} path="admin">
              <Route path="manageorder" element={<ManageOrder />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>

            <Route
              element={
                <Authorisor>
                  <User />
                </Authorisor>
              }
              path="user"
            >
              <Route path="customiser/:merchindex" element={<Customiser />} />
              <Route path="userprofile" element={<Userprofile />} />
              <Route path="userprofile1" element={<UserProfile1 />} />
              {/* <Route path="sidebar" element={<Sidebar />} /> */}
              <Route
                path="checkout"
                element={
                  <Elements stripe={stripe}>
                    <CheckoutForm />
                  </Elements>
                }
              />
              <Route path="navigationbar" element={<Navigationbar />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
