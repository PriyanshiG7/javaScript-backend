// Every method 
let arr = [1,2,3,4].every(function(el){
    el%2==0;
});

console.log(arr); // output: false

// let arr = [2,4,6].every((el)=>{   //  output: false syntax error occurred
//     el%2==0;
// });
// console.log(arr);

console.log([2,4].every((el)=>(el%2==0))) // output: true


// array with object in every array

let objArr3 = [
    {name: "John", age: 25}
];
let isAllAdult = objArr3.every(function(obj){
    return obj.age=25;
});
console.log("Is all objects in array adult?", isAllAdult);  // output: true