//reduce method : reduce the array to a single value

let arr6=[1,2,3,4,5];
let sum = arr6.reduce(function(accumulator, currentValue){
    console.log(accumulator);// it prints the previous iteration result also
    return accumulator + currentValue;   // it print the final iteration result
},0);
console.log("Sum of array elements : ", sum);

// array of object  using reduce method : 

    let arr7=[{name:"John", age:25}, {name:"Alice", age:30}, {name:"Bob", age:28}];
    let totalAge = arr7.reduce(function(accumulator, currentValue){
        return accumulator + currentValue.age;
    },0);
    console.log("Total age of all objects : ", totalAge);

// finding maximum in array :
let arr8=[1,2,3,4,5,9,8];
let maxNum = arr8.reduce(function(accumulator, currentValue){
    return Math.max(accumulator, currentValue);
});
console.log("Maximum number in array : ", maxNum);

// finding minimum in array :
let arr9=[1,2,3,4,5,9,8];
let result = arr9.reduce((max, el) =>{
if(el>max){
    return el;
}else {
    return max;
}
})
console.log("Maximum number in array : ", result);