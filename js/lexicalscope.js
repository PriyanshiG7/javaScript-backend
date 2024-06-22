function outerFunc(){ // outer funtion 
let x = 5;
let y=7;
function innerFunc() {  // inner function 
    // agar variable declare hone ke baad function  define hota h toh  uske under variable ko use ka pana possible h or agar function define hone ke baad bhi variable declare karna or value access karna bhi possible h 
console.log (x) ;
}
innerFunc( ) ;
}

// outter function ke ander inner use ho sakta h lekin inner ke under outter nahi (opposite not true)