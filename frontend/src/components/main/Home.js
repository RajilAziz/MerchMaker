import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Home = () => {
  return (
    <div>
      <section id="main">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div>
                  <h1>panache inclination station</h1>
                  <p>
                    Showcase all of the custom merch you’ve designed for your
                    subscribers in one place by creating an online store.
                    They’re free to create and simple to customize to match your
                    brand Showcase all of the custom merch you’ve designed for
                    your subscribers in one place by creating an online store.
                    They’re free to create and simple to customize to match your
                    brand
                  </p>
                  <button type="button" class="btn btn-primary btn-lg me-3">
                    Registre Here
                  </button>
                  <button type="button" class="btn btn-primary btn-lg">
                    Demo
                  </button>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <img
                  src="https://i.pinimg.com/564x/1a/08/58/1a085862c88c88eecb39b8c1d012f96c.jpg"
                  class="img-fluid"
                  alt="img"
                  style={{ marginTop: "30%" }}
                />
              </div>
            </div>
            <div class="col-3">
              <div class="row">
                <img
                  src="https://i.pinimg.com/564x/3c/83/37/3c833796ebb9e036c3a7e179974a0dab.jpg"
                  class="img-fluid"
                  alt="img"
                />
              </div>
              <div class="row">
                <img
                  src="https://i.pinimg.com/564x/9e/5d/ed/9e5ded8e06b1ddedb32ea2b10ca3aa0f.jpg"
                  class="img-fluid"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row" style={{ marginTop: "5%"}}>
          <div class="col-3"></div>
          <div class="col-sm-6">
            <div class="card" id="card1">
              <div class="card-body">
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6">
                    <div class="card">
                      <img
                        src="https://i.pinimg.com/564x/7f/c5/80/7fc580f4f5a78fa111d50feabc1d3647.jpg"
                        class="card-img-top card-img-bottom"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ marginTop: "5%" }}>
          <div class="col-3"></div>
          <div class="col-sm-6">
            <div class="card" id="card1">
              <div class="card-body">
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6">
                    <div class="card">
                      <img
                        src="https://i.pinimg.com/564x/7f/c5/80/7fc580f4f5a78fa111d50feabc1d3647.jpg"
                        class="card-img-top card-img-bottom"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ marginTop: "5%" }}>
          <div class="col-3"></div>
          <div class="col-sm-6">
            <div class="card" id="card1">
              <div class="card-body">
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6">
                    <div class="card">
                      <img
                        src="https://i.pinimg.com/564x/7f/c5/80/7fc580f4f5a78fa111d50feabc1d3647.jpg"
                        class="card-img-top card-img-bottom"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
};

export default Home;
