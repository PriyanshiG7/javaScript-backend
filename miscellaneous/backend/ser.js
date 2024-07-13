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


// array methods :1 forEach (normal function)

let arr=[1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});

//(Arrow function)
let arr1=["a","b","c","d","e","f","g",];
arr1.forEach((el) => {
    console.log(el);
});

// for each method for an array of object
let objArr = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];
objArr.forEach(function(obj) {
    console.log(obj, obj.age);
});

// array methods :2 map method

let arr2=[1,2,3,4,5];
let squareArr = arr2.map(function(el){
    return el*el;
});
console.log(squareArr);
console.log(arr2);

// map method for an array of object

let objArr1 = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];

let newObjArr = objArr1.map(function(obj) {
    return {name: obj.name.toUpperCase(), age: obj.age};
});
console.log(newObjArr);

//(Arrow function) uppercase method 

let arr3=["a","b","c","d","e","f","g",];
let newArr = arr3.map((el) => {
    return el.toUpperCase();
});
console.log(newArr);

// array methods :3 filter method

let arr4=[1,2,3,4,5,6,7,8,9,10];
let evenArr = arr4.filter(function(el){
    return el%2===0;
});
console.log("Filter even numbers from an array are : ", evenArr);


// array with object in filter array
let objArr2 = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];

let youngObjArr = objArr2.filter(function(obj){
    // return obj.age<25;
    return obj.age>=25 && obj.age<=30;  // print only objects that are between 25 and 30 years old
    //return obj.name;
   });
console.log("Filter young objects from an array are : ", youngObjArr);

// array methods :4 every method

let arr5=[1,2,3,4,5,6,7,8,9,10];
let isAllEven = arr5.every(function(el){
    return el%2===0;
});
console.log("Is all numbers in array even?", isAllEven);

console.log("all element in given array are even", [2,4].every((el)=>(el%2==0)))

// array with object in every array

let objArr3 = [
    {name: "John", age: 25}
];
let isAllAdult = objArr3.every(function(obj){
    return obj.age=25;
});
console.log("Is all objects in array adult?", isAllAdult);

// array methods :5 Sum method

let ajay = [1, 2, 3, 4, 5];
console.log("Sum method; ", ajay.some((el)=>{
    return el<1;
    
}));
console.log([1, 2, 3, 4, 5].some((el)=>(el>3)));

console.log([1, 2, 3, 4, 5].some((el)=>(el%2==0)));

// array with object in some array

let objArr4 = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];

console.log("some array object: ",objArr4.some(function(obj){
    return obj.age>=25;
}));

// array methods :6 reduce method

let arr6=[1,2,3,4,5];
let sum = arr6.reduce(function(accumulator, currentValue){
    console.log(accumulator);
    return accumulator + currentValue;
},0);
console.log("Sum of array elements : ", sum);

// array of object  using reduce method : 

let arr7=[{name:"John", age:25}, {name:"Alice", age:30}, {name:"Bob", age:28}];
let totalAge = arr7.reduce(function(accumulator, currentValue){
    console.log(accumulator);
    return accumulator + currentValue.age;
},0);
console.log("Total age of all objects : ", totalAge);


// finding maximum in array :

let arr8=[1,2,3,4,5,9,8];
let result = arr8.reduce((max, el) =>{
if(el>max){
    return el;
}else {
    return max;
}
})
console.log("Maximum number in array : ", result);

let arr10=[99,77,44,33,100];
let max=-1;
for(let i=0;i<arr10.length; i++){
    if (max< arr10[i]){
        max=arr10[i];
    }
}
console.log("Maximum number in array : ", max);

// default parameters: given the default value to the argument
const add1= (a,b=4)=>(
    a+b
);
console.log("Addition is ",add1(2));//output 6
console.log("Addition is ",add1(2,8)); //output 10