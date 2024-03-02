require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const api = require("./routes/api")

app.get( "/", (req, res) => {
    // console.log(req);
    res.send("Hello world");
})

app.use('/api', api.router)

// abc
app.listen(PORT, ()=>{
    console.log(`Start at port ${PORT}`);
})
