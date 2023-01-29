import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import { UserContext } from "./../user/UserContext";
import { useContext } from "react";
const url = app_config.backend_url;
const SignIn = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserContext);
  const userSubmit = async (formdata,{setSubmitting}) => {
    console.log(formdata);
    setSubmitting(true)
    // for creating request on backend
    const response = await fetch(url+"/user/add", {
      method: "Post",
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
        title: "welldone",
        text: "you have done wonderful job",
      });
      response.json().then((data)=>{
        console.log(data)
        setLoggedIn(true)

        if (data.isAdmin) {
          sessionStorage.setItem("admin", JSON.stringify(data));
          navigate("/admin/");
        } else {
          navigate("/home");
          sessionStorage.setItem("user", JSON.stringify(data));
        }
      })
      // navigate("/home");
    }else if (response.status === 401) {
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
  // 1.address
  // 2.request method
  // 3. data
  // 4. data format
const userForm={
  email: "",
  password: "",
  
}

  return (
    <div>
      <section>
        <div className="container">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col col-xl-10 mt-5">
              <div class="card" style={{ borderRadius: "1rem " }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-7 col-xl-6">
                    <img
                      src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
                      class="img-fluid"
                      alt=""
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 col-xl-6">
                    <Formik
                      initialValues={userForm}
                      onSubmit={userSubmit}
                    >
                      {({ values, handleChange, handleSubmit,isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                          <div
                            className="form-outline mt-3"
                            style={{ marginRight: "5%" }}
                          >
                            {" "}
                            <h1 className="row d-flex align-items-center justify-content-center">
                              Login
                            </h1>
                            <TextField
                              label="Email Address"
                              variant="standard"
                              className="w-100 mb-4"
                              id="email"
                              type="email"
                              onChange={handleChange}
                              value={values.email}
                            />
                          </div>
                          <div
                            className="form-outline"
                            style={{ marginRight: "5%" }}
                          >
                            <TextField
                              label="Password"
                              variant="standard"
                              className="w-100 mb-4"
                              id="password"
                              type="password"
                              onChange={handleChange}
                              value={values.password}
                            />
                          </div>
                          <div className="d-flex justify-content-between align-items-center ">
                            {/* <div class="form-check"> */}
                            <FormControlLabel
                              value="end"
                              control={<Checkbox />}
                              label="Remember me"
                              labelPlacement="end"
                            />
                            {/* </div> */}

                            <Link
                              class="small text-muted"
                              to="/main/reset"
                              style={{ marginRight: "5%" }}
                            >
                              Forgot password?
                            </Link>
                          </div>

                          <div className="d-flex justify-content-between align-items-center mb-4 ">
                            <button
                              disabled={isSubmitting}
                              //  width="100"
                              type="submit"
                              variant="contained"
                              className=" btn btn-primary btn-lg btn-block w-100 "
                              style={{ marginRight: "5%" }}
                            >
                              Sign In
                            </button>
                          </div>
                          <div>
                            <p
                              // class="mt-4"
                              style={{ color: "#000000", marginRight: "5%" }}
                            >
                              Have no account ?{" "}
                              <Link to="/main/signup">Signup</Link>
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
                                style={{ marginLeft: "2px" }}
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
      </section>
    </div>
  );
};

export default SignIn;
