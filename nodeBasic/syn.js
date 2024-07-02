// synchronous and asynchronous nature  of node js

// how to read and write file synchronous in this file

const readline = require('readline');
const fs=require('fs');

let textIn = fs.readFileSync('./files/input.txt','utf-8');
console.log(textIn);



//this data written in output.txt file from input.txt
let content = `Dta read from input.txt: ${textIn}. \nDate created ${new Date()}`
fs.writeFileSync('./files/output.txt', content); 
// here if output.txt file is not created in any case then it will automatically created and display our output in that file.
