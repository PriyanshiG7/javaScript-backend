const express = require("express");
const app = express()
// console.dir(app);

let port =3040;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("no result");
// })

// app.get("/search",(req,res)=>{
//     let { q }=req.query;
//     res.send(`search results for query : ${q}`);
// });

// app.get("/search",(req,res)=>{
//     let { q }=req.query;
//     res.send(`<h1>search results for query : ${q}</h1>`);
// });

app.get("/search",(req,res)=>{
    let { q }=req.query;
    if(!q){
        res.send("<h1>nothing req send from yours side</h1>")
    }
    res.send(`<h1>search results for query : ${q}</h1>`);
});