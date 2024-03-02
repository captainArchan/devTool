require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const api = require("./routes/api")

app.get( "/", (req, res) => {
    res.send("Hello world");
})

//PM2.5 API
app.use('/api', api.router)

app.listen(PORT, ()=>{
    console.log(`Start at port ${PORT}`);
})
