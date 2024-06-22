{
    let a=98;
    const b=90;
    var c=78; // we can't use var in block scope 
    let d=99;
    console.log(d);//  it print inside the block scope
}
console.log(c); //b/c its outside the block scope but it use var keyword which are not use block scope (let , const)keyword.
console.log(b); //b/c its outside the block scope
console.log(a);  //b/c its outside the block scope


for(let i=0;i<5;i++){
    console.log(i); //  block scope
}
console.log(i);// it not block scope

//if we create any variable inside any loops then we can access  their value only inside the loop 


