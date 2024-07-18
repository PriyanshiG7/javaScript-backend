// distructing (array)
let names = ["priyanshi", "ajay", "aadi", "goli"];
// girl = index[0] position value stored
// boy = index[1] position value stored
// others = stored all remaining values as an array because we use rest method here
let [girl, boy , ...others] = names;
// here we individually use array values and  also use rest method with distructing function

// distructing (object)

let person = {name: "John", age: 25, city: "New York", state: "NY", country: "Unitedstates",gender: "Female"};
let {name, age, city , ...othersDetails} = person;  // here we don't change key name when we want to print anything in destructing objects 
// let {userName: name, userAge :age, ...othersDetails} = person1; // here we
console.log(name, age, city, othersDetails);


const student ={
name: "karan" ,
class: 9,
age: 14,
subjects:["hindi", "english", "math", "science", "social studies"] ,
username:"karan123",
password : 1234,
}
const { username: user, password: pass, city: loc="delhi" }=student;
console. log (user); // "karan123"



