const Model = require("../models/orderModel")
const router=require("express").Router()

router.post("/add", (req, res) => {
    console.log(req.body);
    // storing the data in the database
    new Model(req.body)
      .save()
      .then((result) => {
        // console.log(result);
        // console.log("data saved");
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.json(err);
      });
  });

  router.get('/getbyid/:userid', (req, res) => {
    
    Model.findById( req.params.userid )
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
  })

  router.delete('/delete/:userid', (req, res) => {
    Model.findByIdAndDelete( req.params.userid )
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
  })

  router.put('/update/:userid', (req, res) => {
    Model.findByIdAndUpdate(req.params.userid, req.body, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
  });

  router.post("/authenticate", (req, res) => {

    
    Model.findOne({ email: req.body.email, password: req.body.password })
      .then((userdata) => {
        if (userdata) {
          res.status(200).json(userdata);
        } else {
          res.status(300).json({ message: "Invalid Credentials" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.json(err);
      });
  });
  
  router.get('/getall', (req, res) => {
    // reading the data from the database
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);        
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
    //res.send('get all from user router')
  })
  
  module.exports = router;