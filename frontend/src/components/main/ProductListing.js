import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import { ClassNames } from "@emotion/react";

const ProductListing = () => {
  // root:{
  //   paddingLeft:'240px'  
  // }
  // const assets=[kids,Mugs,Shoe_1,Tshirts]
// const classes = useStyles();

  const productsList = [
    {
      title: "Sport Shoes",
      file: "Shoe_1",
      category: 'cloths',
      price: 300,
      thumbnail:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Tshirts",
      file: "Tshirts",
      thumbnail:
        "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    },
    {
      title: "Mugs",
      file: "Mugs",
      thumbnail:
        "https://m.media-amazon.com/images/I/81aozZ0C+QS._AC_SS450_.jpg",
    },
    {
      title: "Kids Wear",
      file: "Kids",
      thumbnail:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11113509a.webp",
    },
  ];

  return (
    // <div className={classes.root}
    // style={{ minHeight: "100vh", backgroundColor: "#eee" }}>
      
      <div className="container" spacing={5} style={{backgroundColor: "#FFFAF0"}}>
    
        <div className="row">
          {" "}
          {productsList.map((prod, index) => (
            <div className="col-md-3 mt-5">
              <div class="card" md={4}>
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={prod.thumbnail}
                    class="img-fluid"
                  />
                  {/* <a href="#!">
                <div
                  class="mask"
                  style="background-color: rgba(251, 251, 251, 0.15);"
                ></div>
              </a> */}
                </div>
                <div class="card-body">
                  <h5 class="card-title">{prod.title}</h5>
                  <p class="card-text">{prod.category}</p>
                  <p class="card-text">{prod.price}</p>

                  <Link
                    className="btn-5 btn btn-primary float-end"
                    to={"/user/customiser/" + index}
                  >
                    Use This
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default ProductListing;
