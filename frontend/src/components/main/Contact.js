import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import SendIcon from '@mui/icons-material/Send';
import "./Contact.css";
// import * as Yup from 'yup';
const Contact = () => {
  const contactform = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactSubmit = (formdata, { resetForm }) => {
    fetch("http://localhost:5000/contact/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("data saved");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Contact Success!!👍",
          });

          res.json().then((data) => {
            console.log(data);

            sessionStorage.setItem("user", JSON.stringify(data));
          });

          resetForm();
        } else if (res.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Contact Failed!!👍",
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const formSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, 'Too Short Username!')
  //     .max(5, 'Too Long Username!')
  //     .required('Username is Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  //   password: Yup.string().required('Required')
  //   .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),

  // });
  return (
    <section id="contact" class="contact" style={{ marginTop: "4%" }}>
      <div class="container" data-aos="fade-up">
        <div class="card" id="card">
          <div class="card-body">
            <div class="section-title">
              <h2 class="title">Contact</h2>
              <p class="paragraphtitle">Contact Us</p>
            </div>
            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="info-box mt-3">
                          <div class="address">
                            <i>
                              <LocationOnOutlinedIcon />
                            </i>
                            <h3 class="contactheading">Our Address</h3>
                            <p class="addressparagraph">
                              A108 Adam Street, New York, NY 535022
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card " style={{ marginTop: "9%" }}>
                      <div class="card-body">
                        <div class="info-box mt-3">
                          <div class="email">
                            <i>
                              <EmailOutlinedIcon />
                            </i>
                            <h3
                              class="contactheading"
                              style={{ paddingTop: "10%" }}
                            >
                              Email Us
                            </h3>
                            <p class="addressparagraph">
                              info@example.com
                              <br />
                              contact@example.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card " style={{ marginTop: "9%" }}>
                      <div class="card-body">
                        <div class="info-box mt-3">
                          <div class="phone">
                            <i>
                              <PhoneInTalkOutlinedIcon />
                            </i>
                            <h3
                              class="contactheading"
                              style={{ paddingTop: "10%" }}
                            >
                              Call Us
                            </h3>
                            <p class="addressparagraph">
                              +1 5589 55488 55
                              <br />
                              +1 6678 254445 41
                            </p>
                            <Button variant="contained" endIcon={<SendIcon />}>
                              Send
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    {/* <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="col form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form> */}
                    <Formik
                      initialValues={contactform}
                      onSubmit={contactSubmit}
                      // validationSchema={formSchema}
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
                            label="Your Name"
                            variant="outlined"
                            className="w-100 mb-4"
                            id="username" // name can also used
                            onChange={handleChange}
                            value={values.username} // value passed above
                            helperText={errors.username}
                            error={Boolean(errors.username && touched.username)}
                          />
                          <TextField
                            label="Your Email"
                            variant="outlined"
                            className="w-100 mb-4"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            helperText={touched.email ? errors.email : ""}
                            error={Boolean(errors.email && touched.email)}
                          />
                          <TextField
                            label="Subject"
                            variant="outlined"
                            className="w-100 mb-4"
                            id="subject"
                            type="subject"
                            onChange={handleChange}
                            value={values.subject}
                            helperText={touched.subject ? errors.subject : ""}
                            error={Boolean(errors.subject && touched.subject)}
                          />
                          <TextareaAutosize
                            // label="Message"
                            placeholder="Message"
                            variant="outlined"
                            className="w-100 mb-4"
                            id="message"
                            onChange={handleChange}
                            value={values.message}
                            helperText={touched.message ? errors.message : ""}
                            error={Boolean(errors.message && touched.message)}
                          />

                          <Button
                            type="submit"
                            variant="contained"
                            style={{ width: "100%", marginBottom: "2%" }}
                          >
                            Send Message
                          </Button>
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
  );
};

export default Contact;
