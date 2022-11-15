// get and set attributes

//get
// const link = document.querySelector("a");
// console.log(link.getAttribute("href")); //#home
//little chalange: get homw without #
// console.log(link.getAttribute("href").slice(1)); //home

// const formGroup = document.querySelector(".form-group input");
// console.log(formGroup.getAttribute("type")); //text
// console.log(formGroup.getAttribute("name")); //username
// console.log(formGroup.getAttribute("id")); //username

//set
// given: const link = document.querySelector("a");
// link.setAttribute("href", "https://google.com");
// console.log(link.getAttribute("href")); //https://google.com


//<---------------------------------------->//
//get multiple elements using getElementsByClassName
// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems); //HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item]

//get multiple elements using querySelelctorAll
// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems); //NodeList(3) [li.nav-item, li.nav-item, li.nav-item]

//get multiple elements using getElementsByTagName
// const navItems = document.getElementsByTagName("a");
// console.log(navItems); //HTMLCollection(3) [a, a, a]
