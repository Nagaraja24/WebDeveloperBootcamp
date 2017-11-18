
console.log("isEven function ")

function isEven(num) {

	// if(num % 2 == 0){
	// 	return true;
	// }
	// return false;

	return num % 2 === 0;

}

console.log("Is 4 even " + isEven(4));
console.log("Is 21 even " + isEven(21));

console.log("Factorial ");

function factorial(num){

	if(num === 0 || num ===1)
		return 1;
	
	return num * factorial(num-1);

}

console.log("Factorial of 7 is : "+ factorial(7));
console.log("Factorial of 0 is : "+ factorial(0));

console.log("kebab to snake case")


function kebabToSnake(str) {

	//replace all '-' with "_"

	return str.replace(/-/g, "_");
}

console.log("Hello-how-are-you ==>"+ kebabToSnake("Hello-how-are-you"));
