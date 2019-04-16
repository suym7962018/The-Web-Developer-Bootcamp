var answer = prompt("are we there yet?");

// while(answer != "yeah" && answer != "yes"){
// 	var answer = prompt("are we there yet?");
// }

//Bonus one
while(answer.indexOf("yes") === -1){
	var answer = prompt("are we there yet?");
}
alert("Yay, we finally made it!");