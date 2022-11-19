//static list vs live list

//querySelector humein static list degi
//getElementBy...(class,tag etc) humein live list degi

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthli);
// console.log(listItems);
/* this gives us NodeList(5) [li, li, li, li, li] -> on adding another li element to it
   i.e, 6th one, but it shows us NodeList(5), this is the reason it is static list */

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthli = document.createElement("li");
sixthli.textContent = "item 6";
ul.append(sixthli);
console.log(listItems);  //HTMLCollection(6) [li, li, li, li, li, li]
