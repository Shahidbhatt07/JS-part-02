// Very good way to add new elements in html document
// document.createElement();
//append
//prepend
//remove
//Another 2 methods of add new elements -> before and after

//how to create new element
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// console.log(newTodoItem);
// const TodoList = document.querySelector(".todo-list");
//append
// TodoList.append(newTodoItem);
//prepend
// TodoList.prepend(newTodoItem);
//remove
const todo1 = document.querySelector(".todo-list li");
// console.log(todo1);
// todo1.remove();


//before and after methods
//these methods create lists and add new elements to it
//Comparison with append and prepend: in append and prepend we have seen that new elements are added to the already existing list

const TodoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
// TodoList.after(newTodoItem);
TodoList.before( newTodoItem);