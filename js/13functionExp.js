//TAKE ONE OR MULTIPLE FUNCTION AS ARGUMENT  
function multipleGreet(func,n){ // high order function 
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("hii");
}
//multipleGreet(greet(),2)// here greet() syntax is wrong b/c its means here we execute greet means here we not pass any value 
multipleGreet(greet ,2); // both same here you directly print value of their function by their variable
multipleGreet(function() {console.log("nameste")},1000) // and here you print by their value and call its function                                       