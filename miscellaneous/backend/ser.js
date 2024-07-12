const express = require("express");
const app =express();
const port=8000;

// table print 
let i=1;
while(i<=10){
   let n= console.log("6 x" , i, "=" , 6*i);
    i++;
}


// methods
let calculator= {
    add:function(a, b){
    return a + b;
    },
    sub:function(a, b) {
    return a-b;
    },
    mul:function(a, b) {
    return a * b;
    },
    div:function(a, b){
    return a/b;
    },
    exp:function(a,b){
    return a**b;
    },
    rem:function(a,b){
    return a%b;
    },
    };
console.log(calculator.add(4,5));




// this keyword
const student ={
    name : "priyanshi",
    age : 20 ,
    eng:99,
    math:98,
    getAvg(){
        let avg =(this.eng+ this.math)/2;
        return avg;
    }
}
console.log(student.getAvg());



// for testing purposes only
// arrow functions
const mul = (a,b)=>{
    console.log(a*b);
}
mul(2,3);

// implicit return in arrow functions
const add= (a,b)=>(
    a+b
);
console.log("Addition of 2+3 is ",add(2,3));

// try and catch
console.log("hello");
try{
    console.log(n);
}catch(err){
    console.log("Error :",err);
}



// setTimeout function
console.log("hi there!");
setTimeout( ()=> {
console.log("your College");
}, 6000);
console.log("welcome to");

// set Interval function
let counter = 0;
const interval = setInterval( ()=> {
    counter++;
    console.log(counter);
    if(counter === 10){
        clearInterval(interval);
    }
}, 1000);

// this with arrow functions
const student1={           //this object is parent for this with arrow function
    name: "Priyanshi",
    age:23,
    eng:34,
    math:97,
    prop: this,   //global scope
    getName: function(){
        console.log(this);
        console.log( this.name);
    },
    
    getMath:()=>{
        console.log(this); //parent scope ->window
        return this.math;
    },
    
    getInfo1: function(){
        setTimeout (()=>{
            console.log(this);  
        },1000);
    },

    getInfo2: function(){
        setTimeout (function(){
            console.log(this);
        },2000);
    },

};

console.log(student1);
console.log( `name ${student.name}`);
console.log(student1.getName());
console.log(student1.getMath());
console.log(student1.getInfo1());
console.log(student1.getInfo2());

// que1: write an arrow function that returns the square of number 'n'
const square =(n)=>{
    console.log(n*n);
}
square(5);

// que2: write a function that prints "hello world" 5 times at intervals of 2s each time

let printHello = setInterval(()=>{
    console.log("hello world");
},2000);
// setInterval(printHello, 2000);
setTimeout(()=>{
clearInterval(printHello);
},12000);



