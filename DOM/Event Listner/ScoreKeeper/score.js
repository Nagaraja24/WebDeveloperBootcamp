var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input");

var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var isGameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!isGameOver ){
		p1Score++;

		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			isGameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!isGameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			isGameOver = true;
		}
		p2Display.textContent = p2Score;
	}

});

resetButton.addEventListener("click", function(){
	reset();
})

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = Number(this.value);
	winningScore = Number(this.value);
	reset();
})

function reset(){
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;

	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

}


