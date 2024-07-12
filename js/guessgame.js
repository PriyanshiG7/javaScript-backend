let favourite ="success";
let guess= prompt("write your favourite movie");
while(guess!= favourite && guess!="quit"){
    console.log("not correct ans");
    
    guess=prompt("again type your favourite movie");
    
}
if(guess==favourite){
    alert("congrats!! you predict correct movie");

}else{
    console.log("quit game!!")
}
