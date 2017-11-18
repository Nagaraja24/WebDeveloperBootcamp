console.log("Print Reverse Method")

var array = [1,2,3,4,5,6];
printReverse(array);

console.log("*****************************************");
console.log("Check if all the elements in the array are uniform")
var uniform = [1,1,1,1,1,1,1,1];
var uniform2 = ["a","a","a"];

var noUniform = [1,3,5,6];
var noUniform2 = ["a","b","c"];

console.log("["+ uniform + "] Is Uniform ?"+ isUniform(uniform));
console.log("["+ uniform2 + "] Is Uniform ?"+ isUniform(uniform2));
console.log("[" + noUniform +"] Is Uniform ?"+ isUniform(noUniform));
console.log("[" + noUniform2 +"] Is Uniform ?"+ isUniform(noUniform2));

console.log("*****************************************");
console.log("Find the given array's sum");

var sumArray1 = [1,2,3,4,5,6];
var sumArray2 = [30,40,50,-100];

console.log("Sum of ["+ sumArray1 + "] array  = " + sumArray(sumArray1));
console.log("Sum of ["+ sumArray2 + "] array  = " + sumArray(sumArray2));

console.log("*****************************************");

console.log("Find the maximum of array");

var maxArray1 = [1,2,3,4,5,6];
var maxArray2 = [30,40,50,-100];

console.log("Max of ["+ maxArray1 + "] array is = " + max(maxArray1));
console.log("MAx of ["+ maxArray2 + "] array is = " + max(maxArray2));


//Print elelments in reverse order
function printReverse(arr){

	for(var i=arr.length; i>=0; i--){
		console.log(arr[i]);
	}

}

//Check if elements are uniform

function isUniform(arr){

	var first;
	// var first = arr[0]; 
	for(var i=0; i<arr.length; i++){
		if(first === undefined){
			first = arr[i];
			continue;
		}

		// if(arr[i] == temp){
		// 	temp = arr[i];
		// }else{
		// 	return false;
		// }

		if(arr[i] !== first){
			return false;
		}

		return true;
	}
}

// find the sum of the array

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(element){
		sum+=element;
	});

	return sum;
}

//find the maximum element in the array

function max(arr){

	var max;
	// var max= arr[0];
	for(var i=0; i<arr.length; i++){
		if(max === undefined){
			max = arr[i]; 
			continue;
		}
		if(max < arr[i]){
			max = arr[i];
		}
	}

	return max;
}