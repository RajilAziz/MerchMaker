import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./Signup.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  // 1. Create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    contact: "",
    password: "",
  };

  // 2. Create a function for form submission

  const userSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);
    const response = await fetch("http://localhost:5000/users/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      console.log(response.status);
      console.log("data saved");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registered successfully!!",
      });
      resetForm();
      // navigate("/main/login");
      navigate("/main/signin");
    } else {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
  };

  //   3. use Formik component

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short Username!")
      .max(5, "Too Long Username!")
      .required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  return (
    <section class="vh-100">
      <div class="container py-5 ">
        {/* <div class="row"></div> */}
        <div class="card" style={{ width: "100%" }}>
          <div class="row 0-g">
            <div class="col-md-6 col-sm-6 quote-bg" id="img">
              <div className="login-bg"></div>
            </div>

            <div class="col-md-6 col-sm-6 ">
              <div class="card-body">
                <h1 class="mt-5 mb-5">Signup Here</h1>
                <Formik
                  initialValues={userForm}
                  onSubmit={userSubmit}
                  validationSchema={formSchema}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        label="Username"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="username" // name can also used
                        onChange={handleChange}
                        value={values.username} // value passed above
                        helperText={errors.username}
                        error={Boolean(errors.username && touched.username)}
                      />
                      <TextField
                        label="Email"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        helperText={touched.email ? errors.email : ""}
                        error={Boolean(errors.email && touched.email)}
                      />
                      <TextField
                        label="Password"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="password"
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                        helperText={touched.password ? errors.password : ""}
                        error={Boolean(errors.password && touched.password)}
                      />
                      <TextField
                        label="Contact"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="contact"
                        onChange={handleChange}
                        value={values.contact}
                        helperText={touched.contact ? errors.contact : ""}
                        error={Boolean(errors.contact && touched.contact)}
                      />

                      <Button type="submit" variant="contained">
                        Signup
                      </Button>
                      <div class="loginpage " id="loginpage">
                        Already have account
                        <Link to="/main/login">Login Here</Link>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
