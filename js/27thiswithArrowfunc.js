// this with arrow functions
const student={           //this object is parent for this with arrow function
    name: "Priyanshi",
    age:23,
    eng:34,
    math:97,
    prop: this,   //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },

    getMath:()=>{
        console.log(this); //parent scope ->window
        return this.math;
    },
    getInfo1: function(){
        setTimeout (()=>{       //here setTimeout ko call window object laga raha h lekin arrow function use karne ki bajah se woo student object(parent object) ko call karega 
            console.log(this);   //student
        },1000);
    },

    getInfo2: function(){
        setTimeout (function(){    //here setTimeout ko call window object laga raha h kiyuki humne yaha arrow function nahi create kiya normal function create kiya h isliye kiyuki settimeout window ki key object hai  
            console.log(this);   //window 
        },2000);
    },
}