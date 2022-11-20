//event object --> (e)
//jab bhi kisi element pe eventListner add hoga,
//browser ke pass 2 cheezay hoti hai,
// JS engine + extra things
// JS engine + webAPI

//Jab browser ko pta chalta hai ki user ne event perform kiya, browser 2 kaam karta hai
// jo callback function hai usko js engine ko dega
// aur jo event hua hai, uski bhi information iss JS engine ko provide kar dega 

const allButtons = document.querySelectorAll(".my-buttons button");
// for (let button of allButtons) {
//     button.addEventListener("click", function (event) {
//         console.log(event.currentTarget);
//     })
// };

//Now in case of arrow functions, the concept of event object is very important.
//As we know we are not able to console "this" i.e, if we want to access properties of that particular element,
// we are not able to do the same because 'this' in arrow function points to window object which we are not demanding.
//Now, see, the event (e) is very important. event object has 2 properties:- 1. target   2.currentTarget
// These properties will give us the content which we want

//1. target :- which element has triggered an event
//2. currentTarget :- on which element we attach eventListner

for (let button of allButtons) {
        button.addEventListener("click", (event)=> {
            console.log(event.currentTarget);
        })
};
    //OR
    for (let button of allButtons) {
        button.addEventListener("click", (e)=> {
            console.log(e.currentTarget);
        })
};
    
// Note: e or event is same

 for (let button of allButtons) {
    button.addEventListener("click", (e)=> {
        console.log(e.target);
    })
};

// ----------------------------------------------------

for (let button of allButtons) {
    button.addEventListener("click", (e)=> {
        console.log(e.target.textContent);
    })
};