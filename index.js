const express = require("express");
const path = require('path');
const app = express();
const route = express.Router();

app.use(express.static('views')) ;


const PORT = 5001;
app.listen(PORT,()=>{
    console.log("Server start on port " + PORT);
})