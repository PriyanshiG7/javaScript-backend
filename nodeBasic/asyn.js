const reading = require('readline');
const fs = require('fs');

//async function

fs.readFile('./files/asyn.txt','utf-8',(error1,data1) => {
    console.log(data1); 

    // because it take time for execution to complete that's why it executes in background and print next line of code first

    fs.readFile('./files/${data1}.txt','utf-8',(error2,data2) => {
        console.log(data2);
    });
});
console.log('read file...');