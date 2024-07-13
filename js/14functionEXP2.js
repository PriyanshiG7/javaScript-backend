//request a function:
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
        console.log(!(n%2 == 0));
    } 
    return odd ; 
   }
   else if(request =="even"){
    let even =function(m){
        console.log(m%2==0);
   }
   return even;
}else {
    console.log("wrong request")
}
   
}
let request = prompt("enter your request:"); // for taking user defined 
console.log("you entered:" +request);
let func=oddOrEvenFactory(request);//for taking request which type of function we used
