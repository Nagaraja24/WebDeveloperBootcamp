
var secretNumber = 4;
var guessNumber = Number(prompt("Guess a number"));

//check if guess is right
if(guessNumber === 4){
	alert("You guessed it right!!");
}
//check  if guess is higher
else if(guessNumber > 4){
	alert("Your guess is higher, guess again")
}
//check if lower
else {
	alert("Too low, guess again");
}