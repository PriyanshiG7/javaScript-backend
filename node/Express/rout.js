const express = require("express");
const app = express()
// console.dir(app);

let port =3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});



app.get("/apple",(req,res)=>{
    res.send({
        name:"apple",
        color:"red",
    });
});

app.get("/search",(req,res)=>{
    res.send({
        item:"mando",
        color:"red",
    });
});

app.get("*",(req,res)=>{
    res.send("this path does not exist");
});

app.post("/", (req,res)=>{
    res.send("you sent a post request to root");
});