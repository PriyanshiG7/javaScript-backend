// arrow function are those function which are small in syntax and occupied less line in code 

//syntax: const func = (arg1, arg2, ....)=>{function definition}

const sum =(a,b)=>{
    console.log(a+b);
}

const cube=(n)=>{
    console.log(n*n*n);
}

const mul=(m,i)=>{  //parenthesis not matter it will work 
    console.log(m*i);
}

const pow=(p,s)=>{
    return p**s;
}

const str=() =>{   //[str =()]here parenthesis are important b/c if not write parenthesis that's imp if  it's empty then it will give error 
    console.log("hii");
}