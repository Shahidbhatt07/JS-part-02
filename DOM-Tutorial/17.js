//inroduction to events
//click event, button even, mouse event etc
// The mostly used events are mouse events, keyboard events and input events
//In mouse events, "click" event is widely used
// we have a "onclick" property which is used only when we set event in html file.

//To add Events, we have 3 different ways, first 2 are not used now, 3rd one is important.
//1.we use it in html file where we have to fire an event, e.g, see in btn class
//  <button class="btn btn-headline" onclick="console.log('you clicked me')">Learn More</button>     pehla tareqa event add karne ka

//2. we create function
// const btn = document.querySelector(".btn-headline");
// console.dir(btn); //here on opening all the properties of it, we can see, onclick: null

// btn.onclick = () => {
//     console.log("you clicked me using method 2");    //now you can see once again the properties, we will see -> onclick: () => {…}
// }

//3. addEventListner method- it takes 2 arguments ("click", function(mtlb, konsa kaam karna hai))
//function banane ke b 2 tareeqe hai, outside aur argument me
const btn = document.querySelector(".btn-headline");
//taeqa 1
// function clickeMe() {
//     console.log("you clicked me me using addEventListner method");
// }
// btn.addEventListener("click", clickeMe); // you clicked me me using addEventListner method

//taeqa 2
btn.addEventListener("click", () => {
    console.log("you clicked me me using addEventListner method !!!!!!!"); //you clicked me me using addEventListner method !!!!!!!
});