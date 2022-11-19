//some old methods too support poor IE(Internet Explorer)
//appendChild;
//insertBefore;
//replaceChild;
//removeChild;

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo";

//appendChild;
// ul.appendChild(li);

//insertBefore;
//here we need reference before which we have to insert new element
// const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li, referenceNode);

//removeChild
// const referenceNode = document.querySelector(".first-todo");
// ul.removeChild(referenceNode);

//replaceChild;
//replace referenceNode with li
const referenceNode = document.querySelector(".first-todo");
ul.replaceChild(li, referenceNode);
