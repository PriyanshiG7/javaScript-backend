// filter array method: filter that elements in the array that you want to print  and give them as an output

let arr4=[1,2,3,4,5,6,7,8,9,10];
let evenArr = arr4.filter(function(el){
    // return el%2===0;   // print only elements that  are even
    // return el%2!=0;   // print only elements that are odd
    return el<7;        // print only elements that are less than 7
});
console.log("Filter even numbers from an array are : ", evenArr);

// array with object in filter array
let objArr1 = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];

let youngObjArr = objArr1.filter(function(obj){
    // return obj.age<25;
    return obj.age>=25 && obj.age<=30;  // print only objects that are between 25 and 30 years old
    //return obj.name;
   });
console.log("Filter young objects from an array are : ", youngObjArr);
