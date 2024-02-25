require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;

app.get( "/", (req, res) => {
    // console.log(req);
    res.send("Hello world");
})

// abc
app.listen(PORT, ()=>{
    console.log(`Start at port ${PORT}`);
})
