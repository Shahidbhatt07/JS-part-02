//how to get dimensions of element like height, width, top margin etc
const sectionTodo = document.querySelector(".section-todo");
const dimensions = sectionTodo.getBoundingClientRect();
console.log(dimensions); //DOMRect {x: 191.5, y: 20.1875, width: 1200, height: 435.46875, top: 20.1875, …}

//finding one dimension
const widthSectionTodo = sectionTodo.getBoundingClientRect().width;
console.log(widthSectionTodo); //1200

const topSectionTodo = sectionTodo.getBoundingClientRect().top;
console.log(topSectionTodo); //20.1875