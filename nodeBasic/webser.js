const readline = require("readline");
const fs = require("fs");
const http = require("http");


const html=fs.readFileSync("./template/index.html" , 'utf-8');
const server = http.createServer((request , response) =>{
    response.end(html);
     console.log("a new request received");
    //  console.log(request);
    //  console.log(response);
});

server.listen(8000 ,()=>{
    console.log("listening on port 8000");
});