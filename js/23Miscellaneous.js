// arrow function are those function which are small in syntax and occupied less line in code 

//syntax: const func = (arg1, arg2, ....)=>{function definition}

const sum =(a,b)=>{
    console.log(a+b);
}

const cube=(n)=>{       //parenthesis not matter it will work  because when we pass a single argument then parenthesis are ignored but we don't ignore when we pass multiple arguments then parenthesis are required
    console.log(n*n*n);
}

const mul=(m,i)=>{  
    console.log(m*i);
}

const pow=(p,s)=>{
    return p**s;
}

const str=() =>{   // parenthesis  matter  then it will work because here we not pass any arguments that's why parenthesis are required here if we pass any arguments then parenthesis are not required
    //[str =()]here parenthesis are important b/c if we not write parenthesis (that's imp if)  then it will give error 
    console.log("hii");
}


// implicit(automatic) return in arrow functions
const div=(a,b)=>(
    a/b
);