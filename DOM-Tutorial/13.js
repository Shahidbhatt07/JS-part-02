//cloneNode
//how to clone a node

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New todo";
ul.append(li);
// ul.prepend(li);
//we want this new todo be at top as well as at below of todo1. this is not possible by append and prepend at same time, so we have to clone
const li2 = li.cloneNode(true); // on adding true, it will deep clone and add text also
ul.prepend(li2);

