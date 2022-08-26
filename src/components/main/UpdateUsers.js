import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";

const UpdateUsers = ({ updateFormData, setShowUpdateForm, getDataFromBackend }) => {
  const userSubmit = async (formdata) => {
    const response = await fetch("http://localhost:5000/users/update/"+formdata._id, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Updated",
        text: "User Details updated!!",
      });
      getDataFromBackend();
      setShowUpdateForm(false);

    } else {
      console.log(response.status);
      console.log("something went wrong");
    }
    
  };

  return (
    <div>
      <Formik initialValues={updateFormData} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              className="mt-4"
              fullWidth
              label="Username"
              id="username"
              onChange={handleChange}
              value={values.username}
            />
            <TextField
              className="mt-4"
              fullWidth
              label="Email Address"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              className="mt-4"
              fullWidth
              type="password"
              label="Password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />

            <Button variant="contained" className="mt-5 mr-3" type="submit">
              Submit
            </Button>
            <Button
              onClick={(e) => setShowUpdateForm(false)}
              variant="contained"
              color="error"
              className="mt-5"
            >
              Cancel
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateUsers;