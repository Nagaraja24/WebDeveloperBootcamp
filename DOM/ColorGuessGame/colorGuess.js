var colors = []
var colorPicked;
var numberOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");;
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		})
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
		// Add event listners
		squares[i].addEventListener("click", function(){
			var colorClicked = this.style.backgroundColor;
			//alert(colorPicked + colorClicked);
			if(colorClicked === colorPicked){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again ?"
				changeColors(colorPicked);
				h1.style.backgroundColor = colorPicked;
			}else{
				messageDisplay.textContent ="Try Again";
				this.style.backgroundColor = "#232323";
			}
		});	
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColor(numberOfSquares);
	//pick a new random color 
	colorPicked = pickRandomColor();

	colorDisplay.textContent = colorPicked;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function  generateRandomColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
	  arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//random number 0-255 for red
	var r = Math.floor(Math.random() * 256);
	//random number 0-255 for green
	var g= Math.floor(Math.random() * 256);
	//random number 0-255 blue
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";

}