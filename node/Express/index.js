const express = require("express");
const app = express()
// console.dir(app);

let port =3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.use((req,res) =>{
    // console.log(req);  // for knowing more info about req.
    console.log("request received");
    // res.send("i got your response");
    res.send({
        friend1: "Aadi" ,
        friend2 : "priya",
        relation :"friends",

    });
});