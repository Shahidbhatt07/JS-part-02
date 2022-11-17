//Add HTML elements using JavaScript

//lets talk about innerHTML, when should we use it and when not
const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>new Todo 1</li>";
// todoList.innerHTML += "<li>New Todo 2</li>";  //or todoList.innerHTML = todoList +  "<li>New Todo 2</li>"
// todoList.innerHTML += "<li>New Todo 3</li>";

// Note: When we should use innerHTML: if we want to change the inner text of whole document, then we should use it
// Note: when not to use: when we add something in HTML code, there are many issues which are:
                //     performance issues: here you can see, we were having todo 1 there, we added two more todos.
                //     Here Browser not only adds new todos but also renders code of todos already present there.
                //     This is the reason ehy we should not use innerHTML to adding the new elements.

//For this, we have lot of ways to handle this. refer 11.js                