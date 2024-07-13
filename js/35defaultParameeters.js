// default parameters: given the default value to the argument
function sum (a,b =7){
    return a+b;
}
console.log(sum(3)); // here we pass 1 argument that's why it will atomatically assign the value of 'B'=7 (which we assign in above function.)
console.log(sum(3,5));// here we pass 2 arguments that's why it will not take the value of 'B'=5 (which we assign in above function)
console.log(sum()); //we don't pass any argument here that's why it will print NAN 

function sub (a=3,b){
    return a-b;
}
console.log(sub(3,5));// output -2
console.log(sub(3));// output NAN  not valid for single argument if we assign 1st argument value only valid for if we assign 2nd argument((default parameters) value