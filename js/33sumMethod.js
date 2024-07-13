// some method: returns true if some element of array satisfied the condition and if  none of the elements of the array not satisfy the condition then  print false

let arr = [1, 2, 3, 4, 5];
arr.some((el)=>{
    console.log(el > 3);
    return el > 3;
    
})

let ajay = [1, 2, 3, 4, 5];
console.log("Sum method; ", ajay.some((el)=>{
    return el<1;
    
}));

// if some of the elements in the array are greater than 3, it will print true, otherwise it will print false.
console.log([1, 2, 3, 4, 5].some((el)=>(el>3)));

// array with object in some array

let objArr4 = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];

console.log("some array object: ",objArr4.some(function(obj){
    return obj.age>=25;
}));