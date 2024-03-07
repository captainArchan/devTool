require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser  = require('body-Parser')
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { PORT, MONGODB } = process.env;

const logger = () =>
(req, res, next) => { 
  const timestamp = new Date().toISOString(); 
    const { method, url, ip } = req; 
      console.log(`Logger: ${timestamp} \n${method} ${url} - ${ip}\nEND Task.\n`); 
        next(); 
  };

app.use(logger());

// router
const user_route = require("./routes/userRoute");
const dust_route = require("./routes/dustRoute");
const location_route = require("./routes/locationRoute");
const authentication_route = require("./routes/authenticationRoute");

// use router
app.use("/api/user", user_route.router);
app.use("/api/location", location_route.router);
app.use("/api/dust", dust_route.router);
app.use("/api/authen", authentication_route.router);

// connect mongodb
mongoose.connect(MONGODB).then(() =>{
    console.log("Database connected Successfully.");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : ${PORT}`);
    });
}).catch(error => console.log(error));
