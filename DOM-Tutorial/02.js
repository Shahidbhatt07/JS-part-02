//how to use DOM


//Methods for Selecting Elements

//1. getElementById
//This method is used when are given id to an element
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);  //h2#main-heading

//2. querySelector
//unlike getElementById which works only wih ids, this selector worls with everything like classes, ids, buttons etc

//selecting id
const mainHeading2 = document.querySelector("#main-heading");
console.log(mainHeading2);

//selecting class
const header = document.querySelector(".header");
console.log(header);

//selecting multiple things
const mainHeading3 = document.querySelector("div.headline h2");
console.log(mainHeading3);

//3. querySelectorAll
//now if i have a class which is associated with more than 1 element, and i want get them all
const navItem = document.querySelectorAll(".nav-item");
console.log(navItem); //NodeList(3) [li.nav-item, li.nav-item, li.nav-item]
//this nodelist is like an array but actually it is not an array