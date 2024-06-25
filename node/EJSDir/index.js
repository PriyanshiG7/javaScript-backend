const express = require("express");
const app = express()
// console.dir(app);

let port =4040;

app.set("view engine" , "ejs");

app.get("/" ,(req,res)=>{
    res.render("home.ejs");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});