import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';

const Login = () => {
  const loginform = {
    email: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    console.log("submit");
    fetch("http://localhost:5000/users/authenticate", {
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
    username: Yup.string()
      .min(2, 'Too Short Username!')
      .max(5, 'Too Long Username!')
      .required('Username is Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
    
  });

  return (
    <div className="login-bg">
      <div className="col-md-4 col-sm-6 mx-auto my-auto">
        <div className="card">
          <div className="card-body">
            {/* <img
              style={{  }}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            /> */}

            {/* <div
              style={{
                background:
                  "url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)",
                height: "27rem",
                width: "27rem",
                backgroundPosition: "center",
              }}
            ></div> */}
            <h3 className="mt-5 mb-5">Login Here</h3>

            <Formik initialValues={loginform} onSubmit={loginSubmit} validationSchema={formSchema}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mt-3">
                    <input
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <label>Email</label>
                  </div>

                  <TextField
                    variant="outlined"
                    className="w-100 mt-3"
                    label="Password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    className="w-100 mt-3"
                    variant="contained"
                    color="primary"
                    // sx={{ color: "red", background: "white" }}
                  >
                    Login Now
                  </Button>
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
