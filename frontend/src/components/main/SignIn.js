import {
    Cancel,
    CancelPresentation,
    EmailOutlined,
    Visibility,
    VisibilityOff,
  } from "@mui/icons-material";
  import {
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
  } from "@mui/material";
  import { Formik } from "formik";
  // import home from "./assets/watercolor6.jpg";
  import React, { useContext, useEffect, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";
  import { UserContext } from "./../user/UserContext";
  // import Image1 from './img/ab1.jpg'
  // import Image2 from "../img/ab2.jpeg";
  // import "./sign.css";
  import jwt_decode from "jwt-decode";
  import app_config from "../../config";
  
  const url = app_config.backend_url;
  const SignIn = () => {
    // const { setAvatar } = useContext(UserContext);
  
    const handleSignOut = (event) => {
      setUser({});
      document.getElementById("signInDiv").hidden = false;
    };
  
    // Signin with google
    const [user, setUser] = useState({});
    const handleCallbackResponse = (response) => {
      console.log("Encoded jwt id token:" + response.credential);
      var userObject = jwt_decode(response.credential); //converted token into object
      console.log(userObject);
      setUser(userObject);
      // setAvatar(userObject.picture);
      //after signin the button of "signin with google" hides
      document.getElementById("signInDiv").hidden = true;
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          username: userObject.name,
          email: userObject.email,
          avatar: userObject.picture,
        })
      );
    };
  
    const { setLoggedIn } = useContext(UserContext);
    useEffect(() => {
      /*global google*/
      google.accounts.id.initialize({
        client_id:
          "941149713723-22urp8pss6cdudmhnf9007ak61t6t68j.apps.googleusercontent.com",
        callback: handleCallbackResponse, //token visible
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
      google.accounts.id.prompt(); //enable prompt
    }, []);
    //If we have no user:sign in button
    //if we have a user: show a logout button
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const loginform = {
      email: "",
      password: "",
    };
    const loginSubmit = async (formdata, { setSubmitting }) => {
      console.log(formdata);
      setSubmitting(true);
      const response = await fetch(url + "/user/authenticate", {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response.status);
        console.log("success");
  
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });
        response.json().then((data) => {
          console.log(data);
  
          setLoggedIn(true);
          //for admin login
          if (data.isAdmin) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/");
          } else {
            navigate("/home");
            sessionStorage.setItem("user", JSON.stringify(data));
          }
        });
      } else if (response.status === 401) {
        console.log(response.status);
        console.log("something went wrong");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Invalid Credentials",
        });
      }
      setSubmitting(false);
    };
    return (
      <div
        id="signup"
        className="signin-bg animate__animated animate__backInDown"
      >
        <IconButton
          size="large"
          onClick={(e) => navigate("/home")}
          sx={{ float: "right" }}
        >
          <Cancel
            className=""
            sx={{
              color: "white",
              fontSize: 60,
              backgroundClip: "text",
              backgroundImage:
                " -webkit-linear-gradient(top, rgb(72, 15, 15), rgb(255, 0, 0))",
              textShadow: "none",
              borderStyle: "groove",
              padding: "0px",
              borderRadius: "27%",
              borderWidth: "0.5px",
              backgroundColor: "rgb(0, 0, 0)",
            }}
          />
        </IconButton>
  
        <section className="vh-100">
          <div class="container  h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col col-xl-10">
                <div class="card" style={{ borderRadius: "1rem " }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-7 col-xl-6">
                      {/* <img
                        src={Image2}
                        class="img-fluid"
                        alt=""
                        style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                      /> */}
                    </div>
                    <div class="col-md-6 col-lg-5 col-xl-6">
                      <div class="card-body p-lg-5 text-black">
                        <h1
                          className="font-weight-bold"
                          // style={{
                          //   color: "var(--secondary-color)",
                          //   fontWeight: "500",
                          // }}
                        >
                          Sign In
                        </h1>
                        <Formik initialValues={loginform} onSubmit={loginSubmit}>
                          {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <div class="form-outline">
                                <TextField
                                  label="Email*"
                                  variant="standard"
                                  className="w-100 mb-4"
                                  id="email"
                                  // style={{ borderBottom: "0.1rem solid var(--secondary-color)"}}
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <EmailOutlined />
                                      </InputAdornment>
                                    ),
                                  }}
                                  onChange={handleChange}
                                  value={values.email}
                                />
                              </div>
                              <div class="form-outline ">
                                <TextField
                                  label="Password*"
                                  variant="standard"
                                  className="w-100 mb-3"
                                  id="password"
                                  type={showPassword ? "text" : "password"}
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          onClick={(e) =>
                                            setShowPassword(!showPassword)
                                          }
                                        >
                                          {showPassword ? (
                                            <Visibility />
                                          ) : (
                                            <VisibilityOff />
                                          )}
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                  onChange={handleChange}
                                  value={values.password}
                                />
                              </div>
                              <div className="d-flex justify-content-between align-items-center ">
                                <div class="form-check">
                                  <FormControlLabel
                                    value="end"
                                    control={<Checkbox />}
                                    label="Remember me"
                                    labelPlacement="end"
                                  />
                                </div>
                                {/* <a href ="">
                        Forgot password?
                      </a> */}
                                <Link class="small text-muted" to="/main/reset">
                                  Forgot password?
                                </Link>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4 ">
                                <Button
                                  disabled={isSubmitting}
                                  type="submit"
                                  variant="contained"
                                  className=" btn btn-primary btn-lg btn-block"
                                  style={{ width: "38%" }}
                                >
                                  Sign In
                                </Button>
                                <p
                                  class="mt-4"
                                  style={{ color: "#393f81", float: "right" }}
                                >
                                  I'm New User
                                </p>
                                <p class="mt-4" style={{ color: "#393f81" }}>
                                  <Link to="/main/signup">Create Account</Link>
                                </p>
                              </div>
                              <div className="d-flex justify-content-center align-items-center mb-1">
                                <h6>Or Signup with</h6>
                              </div>
  
                              <div className="d-flex justify-content-center">
                                {/* <a
                                  className="btn btn-outline-info btn-floating m-1"
                                  href="#!"
                                  role="button"
                                >
                                  <i
                                    className="fab fa-facebook-f"
                                    style={{ marginLeft: "6px" }}
                                  ></i>
                                </a> */}
  
                                <a
                                  className="btn btn-outline-secondary btn-floating m-1"
                                  href="#!"
                                  role="button"
                                  id="signInDiv"
                                >
                                  <i
                                    className="fab fa-google"
                                    style={{ marginLeft: "6px" }}
                                  ></i>
                                </a>
                                {Object.keys(user).length !== 0 && (
                                  <button onClick={(e) => handleSignOut(e)}>
                                    Signout
                                  </button>
                                )}
  
                                {user && (
                                  <div>
                                    <img src={user.picture} alt="" />
                                    <h3>{user.name}</h3>
                                  </div>
                                )}
  
                                {/* <a
                                  className="btn btn-outline-primary btn-floating m-1"
                                  href="#!"
                                  role="button"
                                >
                                  <i
                                    className="fab fa-linkedin-in"
                                    style={{ marginLeft: "6px" }}
                                  ></i>
                                </a> */}
                              </div>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default SignIn;