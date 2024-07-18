let name = "test";
console.log(name);
console.log(...name);

let arr = [1,2,3];
console.log(arr);
console.log(...arr);


//spread with Array literals
let newArr=[...arr];
console.log(newArr);   // create a duplicate newArr of arr and store in newArr
newArr.push(...arr);
newArr.push(5);
console.log(newArr);

let newName=[...name];
newName.push("spread")
console.log(newName);   // print anewName as arr and create a duplicate value of name variable
console.log(...newName);

let firstName= "Priyanshi";
let lastName= "Garg";

let person=[...firstName,...lastName];

console.log(person);  // print person object with firstName and lastName as properties
 
let fullName={...firstName,...lastName};

console.log(fullName);  // print fullName object with firstName and lastName as properties


let even = [2,4,6];
let odd=[3,5,7];

let combinedArray=[...even,...odd];

console.log(combinedArray);  // print combinedArray with all elements of even and odd array

let combined={...even,...odd};
console.log(combined); // print combined


//spread with Objects
const person1={
    name:"John",
     age:25,
};

const person2={
    name:"Alice",
    age:"30",
};
 let data={...person1,...person2} // it assign person2  not person1  not valid merging
console.log(data);

let objStr={..."pinshu"};
console.log(objStr);


let objArr=[9,0,8,6];
let objArrArr={...objArr}
console.log(objArrArr);


// let fullName={...firstName,...lastName};






