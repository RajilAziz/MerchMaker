import { Field, Formik } from "formik";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import app_config from "../../config";
import toast from "react-hot-toast";
import { UserContext } from "./../user/UserContext";
import { motion } from "framer-motion";
const UserProfile1 = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  // const handleChange=(e) =>{
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  // }
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
    <div
      className="container"
      style={{ backgroundColor: "#eee" }}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
    >
      <div className="container-fluid p-0 m-0">
        <div className="row mt-4">
          <div className="col-12">
            <div
              className="page-header pt-5 pb-5 border-radius-xl shadow-lg"
              style={{
                backgroundImage:
                  "url('https://www.creative-tim.com/assets/navbar/bg-purchases-5c9fc0930fe5ac15a960ddacd6224025e8eb0479f8f80ffa7e53804fba4b438a.jpg",
              }}
            >
              <div className="container-fluid px-5">
                <div className="row">
                  <div className="col-lg-6 col-sm-9">
                    <h1 className="mb-2 text-primary">Profile Settings</h1>
                    <p className="mb-4 text-white max-width-500">
                      Manage your basic profile information here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-4 "
        // style={{
        //   backgroundImage:
        //     "url('https://www.creative-tim.com/assets/navbar/bg-purchases-5c9fc0930fe5ac15a960ddacd6224025e8eb0479f8f80ffa7e53804fba4b438a.jpg",
        // }}
      >
        <div className="row">
          <div className="col-md-6">
            <Formik
              enableReinitialize={true}
              initialValues={currentUser}
              // initialValues={{
              //   username: "Raju",
              //   email: "raju@mail.com",
              //   password: "1234",
              // }}
              onSubmit={onFormSubmit}
            >
              {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div className="card">
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
                    <Button type="submit" variant="contained">
                      Update
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="col-md-6">
            <form className="form-horizontal mt-1">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Social Profiles</h4>
                  <p className="text-sm mb-0">
                    Here you can set your social profiles
                  </p>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-control-label" for="basic-url">
                      <i
                        class="fab fa-twitter fa-lg me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Twitter Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        https://twitter.com/
                      </span>
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="user[twitter_username]"
                        id="user_twitter_username"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="form-control-label" for="basic-url">
                      <i
                        class="fab fa-facebook-f fa-lg me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Facebook Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        https://www.facebook.com/
                      </span>
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="user[facebook_username]"
                        id="user_facebook_username"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="form-control-label" for="basic-url">
                      <i
                        class="fab fa-github fa-lg me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Github Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        https://github.com/
                      </span>
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                        name="user[github_username]"
                        id="user_github_username"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer text-end pt-2">
                  <input
                    type="submit"
                    name="commit"
                    value="Save"
                    className="btn bg-gradient-dark  mb-0"
                    data-disable-with="Save"
                  />
                </div>
              </div>
            </form>
            <div className="card mt-4 mb-4">
              <div className="card-body d-flex justify-content-between align-items-center flex-column flex-md-row">
                <div>
                  <h6 className="mb-0">Do you want to leave us? 😔</h6>
                </div>
                <a
                  data-bs-target="#deactivation-modal"
                  type="button"
                  data-bs-toggle="modal"
                  className="btn btn-outline-danger mb-0 mt-3 mt-md-0"
                >
                  Delete account
                </a>
                <div
                  className="modal fade"
                  id="deactivation-modal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-account">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h5 className="text-center">
                          Are you sure you want to delete?
                        </h5>
                        <br />
                        <p className="text-sm">
                          You will no longer have access to your dashboard and
                          you won't receive any more emails from us.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-outline-danger mb-0"
                          type="submit"
                          onClick={() => deleteUser(currentUser._id)}
                        >
                          Yes, I'm sure
                        </button>

                        <button
                          type="button"
                          className="btn bg-gradient-dark mb-0"
                          data-bs-dismiss="modal"
                        >
                          Nevermind
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card card-body align-items-center flex-column flex-md-row">
              <form className="d-flex align-items-center w-100 justify-content-between">
                <label class="form-check-label mb-0 d-flex align-items-center ms-0">
                  <i
                    class="fas fa-info-circle me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    aria-hidden="true"
                    data-bs-original-title="If you activate your profile link, you will be able to share your profile with anyone you would like. If the link is not active, only you will see your profile details."
                    aria-label="If you activate your profile link, you will be able to share your profile with anyone you would like. If the link is not active, only you will see your profile details."
                  ></i>
                  <span class="sr-only">
                    If you activate your profile link, you will be able to share
                    your profile with anyone you would like. If the link is not
                    active, only you will see your profile details.
                  </span>{" "}
                  Activate Profile Link
                </label>
                <div class="form-check form-switch ms-2 mb-0 me-auto">
                  <input
                    name="user"
                    type="hidden"
                    value="0"
                    autoComplete="off"
                  />
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    name="user"
                    id="user_profile_published"
                  />
                </div>
                <input
                  type="submit"
                  name="commit"
                  value="Save"
                  class="btn bg-gradient-dark mb-0 me-2"
                  data-disable-with="Save"
                />
              </form>
              <a href="#" class="btn bg-gradient-primary mb-0" target="_blank">
                Preview
              </a>
            </div> */}
            {/* <form
              class="form-horizontal mt-4 mt-lg-0"
              id="new_user_details"
              action="/update-user-details"
              accept-charset="UTF-8"
              method="post"
            >
              <div class="card mt-4">
                <div class="card-header">
                  <h6 class="mb-0">About Me</h6>
                  <p class="text-sm mb-0">
                    Here you can build your developer profile
                  </p>
                </div>
              </div>
            </form> */}

            <div>
              <TextField
                label="New Password"
                className="mt-4 w-100"
                name="password"
                validate={passwordValidator}
                onChange={(e) => setNewPass(e.target.value)}
                value={newPass}
              />
              <button onClick={onChangePassword}>UPdate Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile1;