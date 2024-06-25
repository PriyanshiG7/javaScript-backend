const express = require("express");
const app = express()
// console.dir(app);

let port =3030;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});



// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     res.send({
//         name:"apple",
//         color:"red",
//     });
// });

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let htmlstr=`<h1>welcome to the page of @${username}!<h1>`;
    res.send(htmlstr);
});