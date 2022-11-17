//classList -> it tells us about how many classes are present in a particular section
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList); //DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// how to add new class
// sectionTodo.classList.add("bg-dark");

//how to remove a class which is present there
// sectionTodo.classList.remove("container")

//contains -> its tells us whether the class is present or not (true/false)
// sectionTodo.classList.add("bg-dark");
const bgDark = sectionTodo.classList.contains("bg-dark")
console.log(bgDark); //false

//toggle -> it will add a new class if that class is not already present there or it will remove that class if already present
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.toggle("bg-dark");

