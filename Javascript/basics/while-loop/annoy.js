
// var answer = prompt("are we there yet?");

// while(answer !== "yes" || answer!== "yeah"){
// 	var answer = prompt("Are we there yet");
// }

// alert("Yes, we made it");

// Version2

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1){
	var answer = prompt("Are we there yet");
}

alert("Yes, we made it");