var input = prompt("What would you like to do ?");

var todos = [];

while(input !== 'quit'){

	if(input === "new"){
		addTodo();
	}else if(input === "list"){
		listTodos();
	}else if(input === "delete"){
		deleteTodo();
	}

	input = prompt("What would you like to do ?");
}

console.log("You have quit the APP")

function listTodos() {

	console.log("***************")
	//array.forEach
	todos.forEach(function(todo, i){
		console.log(i + ":" + todo);
	});
	console.log("****************")
		
}

function addTodo() {
	var todo = prompt("Enter a new todo ");
	todos.push(todo);
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete")
	console.log("The index to be deleted is : "+ index)
	//splice(startIndex, noOfItems) --> removes from list
	todos.splice(index, 1);
	console.log("Deleted Todo");
}