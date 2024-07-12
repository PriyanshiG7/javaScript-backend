const express = require("express");
const app =express();
const port=8080;


app.use(express.urlencoded({extended: true}));

// // app.get("/register" ,(req, res) => {
//     // for not hiding data in url and not get data in body/html page use this
//     let {id, password }=req.query;                            
//         res.send(`Standard GET response.welcome ${id}!`);
//         });
// //     res.send("Standard GET response");
// //     });

app.get("/register" ,(req, res) => { 
    // for   get url data in body/html page use this
    let {id, password }=req.query;                            
        res.send(`Standard GET response.welcome ${id}!`);
        });
    

// app.post("/register" ,(req, res) => {
//         res.send("Standard POST response");
//         });


// app.post("/register" ,(req, res) => {
//     console.log(req.body);
//     res.send("Standard POST response ");
//     });


app.post("/register" ,(req, res) => {
    let {user, password }=(req.body);
    res.send(`Standard POST response ${user}!`);
    });


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})