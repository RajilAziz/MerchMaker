import React, { useContext, useEffect, useState } from "react";
import {
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
import app_config from "../../config";
import { UserContext } from "./../user/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Image2 from "./../img/ab2.jpg";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const url = app_config.backend_url;

const Login = () => {
  const { setLoggedIn } = useContext(UserContext);
  useEffect(() => {}, []);
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
          navigate("/main/home");
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
      setSubmitting(false);
    }
  }


    return (
      <div id="login">
        <section className="vh-100">
          <div class="container  h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col col-xl-10">
                <div class="card" style={{ borderRadius: "1rem " }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-7 col-xl-6">
                      <img
                        src={Image2}
                        class="img-fluid"
                        alt=""
                        style={{
                          borderRadius: "1rem 0 0 1rem",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div class="col-md-6 col-lg-5 col-xl-6">
                      <div class="card-body p-lg-5 text-black">
                        <h1 className="font-weight-bold">Sign In</h1>
                        <Formik
                          initialValues={loginform}
                          onSubmit={loginSubmit}
                        >
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

export default Login;
