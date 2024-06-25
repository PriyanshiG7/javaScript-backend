const express = require("express");
const app = express()
// console.dir(app);
const path=require("path"); //connect path so that we run at anywhere

let port =5040;

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));  //use for run by direct folder also 

app.get("/" ,(req,res)=>{
    res.render("home.ejs");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});