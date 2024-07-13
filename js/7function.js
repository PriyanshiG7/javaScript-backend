//create function for greet 
function greetings(){
    console.log("good night");
}
greetings();

//create function reminder for forget past
function reminder(){
    console.log("forget past");
}
reminder();

//print number 1-5 using function
function number1_5(){
    for (let i=1;i<=5 ; i++){
        console.log(i);
    }
}
number1_5();

//create function and use if else statement inside the function
function conditionstm(){
    let age =16;
    if (age ==18){
        console.log ("yu are adult now !!");
    }else {
        console.log ("not adult");
    }
}
conditionstm();

// create function and print poem 
function poem(){
    console.log("twinkle twinkle little star \nhow are wonder whag you are  ");
}
poem();

// create function to roll a dice & display the value of the dice (1to 6)
function rolldice(){
    let dice=Math.floor(Math.random()*6)+1;
    console.log(dice);
}
rolldice();