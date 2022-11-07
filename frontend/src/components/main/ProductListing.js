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
        "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4197.jpg",
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
      
      <div className="container" spacing={5}>
    
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
