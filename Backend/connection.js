const mongoose = require('mongoose');
const api_config = require("./config")


const url = api_config.dburl;
//promise
mongoose.connect(url)//this line is used to connect with database   to server 
.then(() => {
    console.log('Connected to database')
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;