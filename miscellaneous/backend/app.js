// prototype 
let arr= [1,2,3,4];
arr.sayHello = ()=> {console.log("hello i'm arr")};
console.log(arr);

// factory function 
function personMaker (name , age){
    const person = {
        name : name,
        age : age,
        talk (){
            console.log(`I am ${this.name} and I am ${this.age} years old`);
        },
    };
    return person;
}
let p1 = personMaker("Priyanshi" , 21 );
console.log(p1 , p1.talk());

let p2 = personMaker("shivu" , 18);
console.log(p2 , p2.talk());



// factory function 2  questions
function createCircle(radius) {
    return {
        radius,
        getArea() {
            return Math.PI * Math.pow(this.radius, 2);
        },
        getCircumference() {
            return 2 * Math.PI * this.radius;
        }
    };
}

let circle1 = createCircle(5);
console.log("Area of circle1: ", circle1.getArea() ,"  ", "circumference of circle1: ", circle1.getCircumference());

let circle2 = createCircle(10);
console.log("Area of circle2: ", circle2.getArea() ,"  ", "circumference of circle2: ", circle2.getCircumference());



// factory function 3  questions
function relation(girlName ,boyName , relationship) {
    return {
        girlName,
        boyName,
        relationship,
        getRelation() {
            return `${this.girlName} and ${this.boyName} are ${this.relationship}`;
        }
        
    };
}

let relation1 = relation("Priyanshi" , "shivu" , "siblings");   //copy 1
console.log(relation1.getRelation());

let relation2 = relation("Priyanshi" , "Arun" , "friend");    //copy 2   means relation1 ===relation2 [false]
console.log(relation2.getRelation());


// factory function 4  questions
function checkGen(person1Age , person2Age){
    let details={
        person1: person1Age,
        person2: person2Age,
        test(){
            if(this.person1 === this.person2)
                return `person1 ${this.person1} and person2 ${this.person2} are of same age`;
            else if(this.person1 > this.person2)
                return `person1 ${this.person1} is older than person2 ${this.person2}`;
            else
                return `person1 ${this.person1} is younger than person2${this.person2}`;
        }
    };
    return details;

}

let genCheck = checkGen(20 , 20);
console.log(genCheck.test());



// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("Hello, my name is " + this.name);
    }
}

let person1 = new Person("Priyanshi", 21);
person1.sayHello();

let person2 = new Person("Priyanshi", 21);
person2.sayHello();

console.log(person1 === person2); // false because they are different objects with same properties but different reference points.


