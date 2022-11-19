//Another method to add html elements using Javascript
// insertAdjacentHTML("where", "html code");
//beforeend; // works as append of createElement() method
//afterbegin; //works as prepend of createElement() method

//beforebegin; //works as before of createElement() method
//afterend; //works as after of createElement() method

const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>New Todo</li>");

// todoList.insertAdjacentHTML("afterbegin", "<li>New Todo</li>");

// todoList.insertAdjacentHTML("beforebegin", "<li>New Todo</li>");

// todoList.insertAdjacentHTML("afterend", "<li>New Todo</li>");