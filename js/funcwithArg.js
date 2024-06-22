function info(name, age){
    console.log(name ,age);
}
info("prijay" ,23);

//calculate two number sum
function sum(a,p){
    console.log(a+p);
}
sum(20 ,23);

//create function that gives the average of 3 number 
function average(a ,p ,u){
    console.log((a+p+u)/3);

}
average(1 ,2 ,3);



// create a function that prints the multiplication table of a number
function table(n){
    for(let i=1; i<=10;i++){
        console.log(n*i);
    }
    
}
table(5);

//or way
function tabletype2(m){
    for(let j=m;j<=m*10;j+=m){
        console.log(j);
    }
}
tabletype2(6);