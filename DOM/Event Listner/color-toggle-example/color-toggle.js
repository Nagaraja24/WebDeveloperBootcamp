var buttonClick = document.querySelector("button");
//var body = document.querySelector("body");

var isPurple = false;

/*buttonClick.addEventListener("click", function(){
	if(isPurple){
		document.body.style.background="purple";
	}else {
		document.body.style.background = "white";
	}

	isPurple = !isPurple;
	
	
});*/

buttonClick.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})