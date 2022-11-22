console.log("hello world");
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

//Event Bubbling
// child.addEventListener("click", () => {
//     console.log("bubble !!! Child")
// });
// parent.addEventListener("click", () => {
//     console.log("bubble !!! parent]")
// });
// grandParent.addEventListener("click", () => {
//     console.log("bubble !!! grandParent")
// });
// document.body.addEventListener("click", () => {
//     console.log("bubble !!! document.body");
//   });


// Event Capturing
        //capture
// child.addEventListener("click", () => {
//     console.log("bubble !!! Child"), true
// });
// parent.addEventListener("click", () => {
//     console.log("bubble !!! parent]"), true
// });
// grandParent.addEventListener("click", () => {
//     console.log("bubble !!! grandParent"), true
// });
// document.body.addEventListener("click", () => {
//     console.log("bubble !!! document.body"), true
// });
     //not capture  
// child.addEventListener("click", () => {
//     console.log("bubble !!! Child")
// });
// parent.addEventListener("click", () => {
//     console.log("bubble !!! parent]")
// });
// grandParent.addEventListener("click", () => {
//     console.log("bubble !!! grandParent")
// });
// document.body.addEventListener("click", () => {
//     console.log("bubble !!! document.body");
// });



//Event Delegation
const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (e) => {
    console.log(e.target);
});
//Here in event delegation, we only add eventListner to only one element and then if click on child or even parent
//  it will also show content irrespective if eventListner is attached only to grandparent only

//! Note: This file isn't working. Don't know the reason
//!error : 25.js:53 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')  at 25.js:53:13
   
