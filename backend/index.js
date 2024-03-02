require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const user_route = require("./routes/userRoute");
const cors = require('cors');
const bodyParser  = require('body-Parser')

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const { PORT, MONGODB } = process.env;


app.use("/api/user", user_route.router);
mongoose.connect(MONGODB).then(() =>{
    console.log("Database connected Successfully.");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port : ${PORT}`)
    });
}).catch(error => console.log(error));

