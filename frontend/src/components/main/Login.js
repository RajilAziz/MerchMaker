import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  // Link,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import {Link} from 'react-router-dom'
import React, { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityoffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import "./Login.css";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

 
let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const url = app_config.backend_url;
  const loginform = {
    email: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    console.log("submit");
    fetch(url + "/users/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });

        res.json().then((data) => {
          console.log(data);

          sessionStorage.setItem("user", JSON.stringify(data));
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!👍",
        });
      }
    });
  };

  const formSchema = Yup.object().shape({
    
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  return (
    <div className="section" style={{ marginTop: "8%", marginBottom: "10%" }}>
      <div className="col-md-4 col-sm-6 mx-auto my-auto">
        <div className="card " id="card">
          <div className="card-body">
            <h3 className="mt-4 mb-4" id="login">
              Login Here
            </h3>

            <Formik
              initialValues={loginform}
              onSubmit={loginSubmit}
              validationSchema={formSchema}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="standard"
                    className="w-100 mt-3"
                    label="Username"
                    type="username"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end">
                            <PersonIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="standard"
                    className="w-100 mt-3"
                    label="Password"
                    type={passwordType}
                    id="password"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePassword}
                            area-label="toggle password"
                            edge="end"
                          >
                            {passwordType === "password" ? (
                              <VisibilityoffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    className="w-100 mt-4"
                    variant="contained"
                    color="primary"

                    // sx={{ color: "red", background: "white" }}
                  >
                    Login Now
                  </Button>

                  <Divider>
                    <div className="d-flex justify-content-center align-items-center mb-3 mt-4">
                      <h6 id="signupwith">Or Signup with</h6>
                    </div>
                  </Divider>

                  <Button className="w-100" type="submit" variant="contained">
                    <i className="fab fa-google me-2"></i>
                    Sign in with Google
                  </Button>

                  <Button
                    className=" w-100 mt-4 mb-3"
                    type="submit"
                    variant="contained"
                  >
                    <i className="fab fa-facebook-f me-2"></i>
                    Sign in with Facebook
                  </Button>

                  <p className="forgot-password text-right mt-2">
                    Forgot Password <Link to="/main/Resetpassword">Reset Here</Link>
                  </p>
                  <p>Don't have account
                  <Link to='/main/signup'>Signup here</Link>
                  </p>
                  {/* <div className="">
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                      Sign Up
                    </span>
                  </div> */}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
