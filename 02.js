//? lexical environment, scope chaining
/*here when we console lastName, it will check whether it is present in printName
function or not. As we can see it is not present there, so it will check its
lexical environment in which it will find lastName there and it uses it*/

// const lastName = "bhat";
// const printName = function() {
//     const firstName = "shahid";
//     console.log(firstName);
//     console.log(lastName);
// }
// return printName();

//!------------------------------------------------------------
//? closures
// Note: A function can return a function/s
/*Def: When a function is returned from a function, it return variables and may also return
 function as well from its local memory(local memory of a function from which it is returned)*/

// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function () {
//         console.log(a,b,x);
//     }
// }
// const ans = hello("arg");
// ans();

// Example2
function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}
//we can write myFunction also as
// const myFunction = power => number => number ** power;

const square = myFunction(2);
const ans = square(3);
console.log("square of 3 is " + ans); //square of 3 is 9

const cube = myFunction(3);
const ans2 = cube(3);
console.log("cube of 3 is " + ans2); //cube of 3 is 27


//application of closures
function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
        console.log("hi, i am here");
        counter++;
    } else {
      console.log("i have been already called");
    }
  };
}
const myfunc = func();
myfunc(); //hi, i am here
myfunc(); //i have been already called
myfunc(); //i have been already called

//! now we have finished how jabvascript works
