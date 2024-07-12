
let n= prompt("enter the number");
console.log(n*n);

// // que1: write a function that takes a number as an argument and prints its square
const square =(n)=>{
    console.log(n*n);
}


// que2: write a function that prints "hello world" 5 times at intervals of 2s each time

let printHello = setInterval(()=>{
    console.log("hello world");
},2000);
// setInterval(printHello, 2000);
setTimeout(()=>{
clearInterval(printHello);
},12000);


//que3:Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers

const arrayAverage = (arr) => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

console.log(arrayAverage([1, 2, 3, 4, 5])); // Output: 3

//que4:What is the output of the following code
const object={
    message:'Hello ji!',
    logMessage(){
        console.log(this.message);
    }};
    setTimeout(object.logMessage,1000);
