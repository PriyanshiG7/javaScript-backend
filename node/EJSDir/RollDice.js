const express = require("express");
const app = express()
// console.dir(app);
const path=require("path"); //connect path so that we run at anywhere

let port =5040;

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));  //use for run by direct folder also 

// app.get("/rolldice" ,(req,res)=>{
//     res.render("rolldice.ejs"); 
// });


app.get("/rolldice" ,(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;  // here generate that db
    res.render("rolldice.ejs",{diceval});
});


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});