import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import Footer from "./Footer"
import "./home.css";

const Home = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <div>
      <div data-draggable="true" style={{ position: "relative" }}>
        <section
          draggable="false"
          className="overflow-hidden pt-0"
          data-v-271253ee=""
        >
          <section className="mb-10 overflow-hidden">
            <div
              className="px-4 py-5 px-md-5 text-center bg-image hero-bg"
              aria-controls="#picker-editor"
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <div className="container h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10">
                      <div className="text-white pb-5">
                        <h1 className="my-md-5 mb-4 px-5 display-3 fw-bold ls-tight">
                          <span>Make Merchandise with</span> <br />
                          <span className="">MERCH MAKER&nbsp;</span>
                        </h1>
                        <Link
                          className="btn btn-outline-light btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 me-md-2"
                          to="/main/signup"
                          role="button"
                          aria-controls="#picker-editor"
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="random1">
              <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </section>
        </section>
      </div>
      <div data-draggable="true" style={{ position: "relative" }}>
        <section
          draggable="false"
          className="container pt-5"
          data-v-271253ee=""
        >
          <section className="mb-10">
            <h2 className="fw-bold mb-5 text-center">
              Why is MERCHMAKER great?
            </h2>
            <div className="row gx-lg-5 mb-5 align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://anthembrand.s3.amazonaws.com/image/Anthem-Branding-Gift-Box.webp"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">Customize Merchandise by Yourself</h3>
                <div className="mb-2 text-danger small">
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  ></i>
                  <span>People</span>
                </div>
                <p className="text-muted">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quae nulla saepe rerum aspernatur odio amet perferendis
                  tempora mollitia? Ratione unde magni omnis quaerat blanditiis
                  cumque dolore placeat rem dignissimos?
                </p>
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://i0.wp.com/logodepotweb.com/wp-content/uploads/2019/11/promotional-merchandise.jpg?fit=1000%2C750&ssl=1"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">Purchase in Bulk</h3>
                <div className="mb-2 text-primary small">
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  ></i>
                  <span>Adventure</span>
                </div>
                <p className="text-muted">
                  Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                  porta dui, sit amet rutrum enim massa in ante. Curabitur in
                  justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                  eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                  ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                  faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                  Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                  Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                  tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                  aliquam lectus. Vestibulum mattis felis quis ex pharetra
                  luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                  ut.
                </p>
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="row gx-lg-5 mb-5 align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="https://www.marstudio.com/wp-content/uploads/2018/01/KicksKarateSwag.png"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">You will meet the locals</h3>
                <div className="mb-2 text-warning small">
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  ></i>
                  <span>People</span>
                </div>
                <p className="text-muted">
                  Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                  tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                  Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                  augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                  lobortis risus. Nullam in commodo sapien. Curabitur ut erat
                  congue sem finibus eleifend egestas eu metus. Sed ut dolor id
                  magna rutrum ultrices ut eget libero. Duis vel porttitor odio.
                  Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi
                  euismod dignissim malesuada, lacus lorem commodo leo,
                  tristique blandit ante mi id metus. Integer et vehicula leo,
                  vitae interdum lectus. Praesent nulla purus, commodo at
                  euismod nec, blandit ultrices erat. Aliquam eros ipsum,
                  interdum et mattis vitae, faucibus vitae justo. Nulla
                  condimentum hendrerit leo, in feugiat ipsum condimentum ac.
                  Maecenas sed blandit dolor.
                </p>
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Home;
