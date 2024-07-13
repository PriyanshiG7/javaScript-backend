// forEach method in JavaScript is used to loop through each element in an array.

let arr = [1,2,,3,4,5,6];
// // function print (el){
// //     console.log(el);
// // }
// // arr.forEach(print);

// //Normal function
arr.forEach(function(el){
    console.log(el);
});

//Arrow function
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


//Short hand arrow function