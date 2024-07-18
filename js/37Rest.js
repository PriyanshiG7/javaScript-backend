// let n=prompt("Enter the value of n:");
function sum(...args) {
return args.reduce((sum, el) => sum + el);
}
// sum(n);
function div(...args){
    return args.reduce((div, el) => div / el);

}

function mul(...args){
    return args.reduce((mul, el) => mul * el);
}

function sub(...args){
    return args.reduce((sub, el) => sub - el);
}

// function min(...args){
//     return Math.min(...args);
// }

function max(...args){
    return Math.max(...args);
}

function avg(...args){
    return args.reduce((sum, el) => sum + el, 0) / args.length;
}

function pow(...args) {
    return  Math.pow(...args );
    
}
function min(...args) {
    return args.reduce((min, el) => {
        if (min>el){
            return el;
        }
        else{
            return min;
        }
    }) ;
    
}

function arg(){
   console.log(arguments);
    console.log(pow(...arguments));
    console.log(div(...arguments));
    console.log(mul(...arguments));
    console.log(sub(...arguments));
    console.log(min(...arguments));
    console.log(max(...arguments));
    console.log(avg(...arguments));
    console.log(arguments.length);
    
}