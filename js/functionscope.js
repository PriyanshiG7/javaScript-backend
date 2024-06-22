let sum =98; // b/c it describe outside the function very normally that's why it is global scope
   //global scope variable ko hhum kahe bhi use kar sakte h
   
function calSum(a, b) {
    let sum = a+b;  //function scope
    console.log( sum) ;  //here it visible b/c it  inside the function 
}
    calSum(1,3);
    console.log( sum) ; //here it can't visible b/c it is outside the function scope
       // it print global scope variable value
    

    // jab bhi hum same name ke do varible ko use karte htoh fuction ke under function scope  waala use hoga
 