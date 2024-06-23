
console.log(process.argv);   //here we don't give any argument value that's why the print by default two values

let args = process.argv;    // here you have pass argument firt then it will show output 

for (let i=2;i<args.length;i++){
    console.log("hello to ",args[i])
}
