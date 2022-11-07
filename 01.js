//Global execution context
// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "shahid";
// console.log(firstName);


//output
/*Window
 Window
undefined
shahid */

//for better understanding, refer to notebook


//function execution context
let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}
const personName = getFullName("shahid", "bhat");
console.log(personName);

/* output:
foo
Arguments(2) ['shahid', 'bhat', callee: ƒ, Symbol(Symbol.iterator): ƒ]
var inside function
shahid bhat */

//for better understanding, refer to notebook
