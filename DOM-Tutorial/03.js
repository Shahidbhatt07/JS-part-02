// Text Change
// Methods >> 1.textContent   2.innerText
//textContent gives us all the content which is visible as well as the text which is hidden
//innerText gives us the content which is visible

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); //Manage your tasks Hello  (Note: <span style="display: none">Hello</span> i.e, Hello is not visible)
console.log(mainHeading.innerText); //Manage your tasks


//? how we can change text
//using textContent
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);

//using innerText
// mainHeading.innerText = "This is something else";
// console.log(mainHeading.innerText);
