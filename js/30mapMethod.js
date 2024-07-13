// map method

let arr = [1,2,3,4,5,6];

let newArr = arr.map(function(el){
    return el*2;
});


let objArr = [
    {name: "John", age: 25}, 
    {name: "Alice", age: 30}, 
    {name: "Bob", age: 20}
];
let newObjArr = objArr.map(function(el){
    // return (el.name);
    // return el.age*2;
    return {name: el.name, age: el.age*2};
})