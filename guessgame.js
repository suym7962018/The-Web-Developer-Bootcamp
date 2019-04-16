var secretNum = 4;	
var num = prompt("Guess a number");
//num = Number(num);

if(num == secretNum){
	alert("You got it right!");
}
else if(num > secretNum){
	alert("Too high. Guess again!");
}
else{
	alert("Too low. Guess again!");
}