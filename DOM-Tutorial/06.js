//<-------------------------------------------------->
//how HTMLCollection and NodeList are diffrent from each other
//They are differentiated on the basis of loops
//simple for loop
// for of loop
//forEach loop

//Note: We can't use forEach in HTMLCollection
// In HTMLCollection, we can use simple for loop, for of loop

// const navItems = document.getElementsByTagName("a");

//for loop
// for (let i = 0; i < navItems.length; i++){
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

//for of loop
// for (let navItem of navItems) {
//     console.log(navItem);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }



//forEach
//we cant use forEach
// const navItems = document.getElementsByTagName("a");
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

//for using it(forEach) in HTMLCollection, first of all we need to change in into Array
// Array.from(navItems)

// let navItems = document.getElementsByTagName("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems)); //true
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// In NodeCollection, we can use all 3 loops for iteraton i.e, simple for loop, for of loop and forEach loop
navItems = document.querySelectorAll("a");

//simple for loop
// for (let i = 0; i < navItems.length; i++){
// console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

//for of loop
// for (navItem of navItems) {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

//forEach
navItems.forEach((navItem) => {
        navItem.style.backgroundColor = "#fff";
        navItem.style.color = "green";
        navItem.style.fontWeight = "bold";
    })