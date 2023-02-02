import React from "react";
import { Link } from "react-router-dom";
import { Field, Formik } from "formik";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import app_config from "../../config";
import toast from "react-hot-toast";
import { UserContext } from "./../user/UserContext";
const Userprofile = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [userArray, setUserArray] = useState([]);
  const getDataFromBackend = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserArray(data);
      });
  };

  const deleteUser = async () => {
    const res = await fetch(url + "/user/delete/" + currentUser._id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      toast.success("Successfully deleted");
      getDataFromBackend();
    }
  };

  const { setAvatar } = useContext(UserContext);
  const [updateForm, setUpdateForm] = useState({});
  const [newPass, setNewPass] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selImage, setSelImage] = useState("");
  const url = app_config.backend_url;

  useEffect(() => {
    fetch(url + "/user/getbyid/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateForm(data);
      });
    console.log(currentUser);
  }, []);

  const onFormSubmit = (value, { setSubmitting }) => {
    value.avatar = selImage;
    fetch("http://localhost:5000/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(value),
      // body : JSON.stringify({
      //   password : newPass
      // })
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("user", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "You have successfully Updated",
      });
    });
  };
  const onChangePassword = () => {
    if (!newPass) {
      Swal.fire({
        icon: "error",
        title: "error",
      });
      return;
    }
    fetch("http://localhost:5000/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify({
        password: newPass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("user", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "Password Changed",
      });
    });
  };
  const passwordValidator = (password) => {
    if (!password) return "password required";
    return "";
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    setAvatar(url + "/" + file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    const reader = new FileReader();
    // reader.addEventListener("load", () => {
    //   setImgData(reader.result);
    // });
    reader.onload = (data) => {
      console.log(data.target.result);
      setPreviewUrl(data.target.result);
    };
    reader.readAsDataURL(file);
    // fetch(url + "/util/uploadfile", {
    //   method: "POST",
    //   body: fd,
    // }).then((res) => {
    //   if (res.status === 200) {
    //     fetch(url + "/user/update/" + currentUser._id, {
    //       method: "PUT",
    //       body: JSON.stringify({ avatar: file.name }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }).then((res) => {
    //       console.log(res.status);
    //       if (res.status == 200) {
    //         res.json().then((data) => {
    //           console.log(data);
    //           setCurrentUser(data);
    //           sessionStorage.setItem("user", JSON.stringify(data));
    //         });
    //       }
    //       Swal.fire({
    //         icon: "success",
    //         title: "Welldone!",
    //         text: "You have successfully Updated",
    //       });
    //     });
    //     toast.success("Image Uploaded!!", {
    //       style: {
    //         borderRadius: "10px",
    //         background: "#333",
    //         color: "#fff",
    //       },
    //     });
    //   }
    // });
  };

  return (
    <div>
      <section style={{ backgroundcolor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col">
              <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                <ol class="breadcrumb mb-0">
                  <Link to="./components/main/Home" class="breadcrumb-item">
                    Home
                  </Link>
                  <li class="breadcrumb-item">
                    <a href="#">User</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                class="rounded-circle img-fluid" style={{width: "150px"}}/> */}

                  <Formik
                    enableReinitialize={true}
                    initialValues={currentUser}
                    onSubmit={onFormSubmit}
                  >
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                      <form onSubmit={handleSubmit}>
                        {/* <div className="card"> */}
                        <div className="card-header">
                          <h4 className="mb-0">Account Settings</h4>
                          <p className="text-sm mb-0">
                            Here you can change your account information
                          </p>
                        </div>
                        <div className="card-body">
                          <div className="row mb-3 d-flex align-items-center justify-content-center">
                            <div className="col-md-6">
                              <div
                                className="fileupload fileupload-new "
                                data-provides="fileupload"
                              >
                                <div className="photo-container d-flex align-items-center justify-content-center">
                                  {/* {url+'/'+currentUser.avatar} */}

                                  <Badge
                                    overlap="circular"
                                    anchorOrigin={{
                                      vertical: "bottom",
                                      horizontal: "right",
                                    }}
                                    badgeContent={
                                      <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="label"
                                      >
                                        <input
                                          hidden
                                          accept="image/*"
                                          type="file"
                                          onChange={uploadThumbnail}
                                        />
                                        <PhotoCamera />
                                      </IconButton>
                                    }
                                  >
                                    <Avatar
                                      src={
                                        currentUser.avatar
                                          ? url + "/" + currentUser.avatar
                                          : previewUrl
                                      }
                                      sx={{ width: 150, height: 150 }}
                                    />
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>

                          <TextField
                            className="mt-4 w-100"
                            label="Full Name"
                            variant="filled"
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                          />



                          <TextField
                            className="mt-4 w-100"
                            label="Email"
                            variant="filled"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                          />
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                          <Tooltip title="Remove">
                            <Button
                              variant="contained"
                              color="error"
                              startIcon={<DeleteIcon />}
                            >
                              Remove
                            </Button>
                          </Tooltip>
                          <Tooltip title="Update">
                            <Button
                              type="submit"
                              variant="contained"
                              className="ms-2"
                            >
                              Update
                            </Button>
                          </Tooltip>
                        </div>
                        {/* </div> */}
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Full Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />

                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <ul class="list-group list-group-flush rounded-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            class="fab fa-github fa-lg"
                            style={{ color: "#333333" }}
                          ></i>
                          <p class="mb-0"></p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            class="fab fa-twitter fa-lg"
                            style={{ color: "#55acee" }}
                          ></i>
                          <p class="mb-0"></p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i
                            class="fab fa-instagram fa-lg"
                            style={{ color: "#ac2bac" }}
                          ></i>
                          <p class="mb-0"></p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <div className="input-group">
                            {/* <i
                            class="fab fa-facebook-f fa-lg"
                            style={{ color: "#3b5998" }}
                          ></i> */}
                            <span className="input-group-text">
                              <i
                                class="fab fa-facebook-f fa-lg"
                                style={{ color: "#3b5998" }}
                              ></i>
                            </span>
                            <input
                              className="form-control"
                              placeholder="Username"
                              type="text"
                              name="user[facebook_username]"
                              id="user_facebook_username"
                            />
                          </div>
                        </li>
                      </ul>
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

export default Userprofile;
