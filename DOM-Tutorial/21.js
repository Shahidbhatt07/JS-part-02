//Events Behind the Scenes
console.log("Script start here !!!");
const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        let num = 0;
    for (let i = 0; i <= 1000000000; i++){
        num += i;
    }
        console.log(e.currentTarget.textContent, num);
    })
}

let outerVar = 0;
for (let i = 0; i <= 100000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("Script end here !!!");

//Notes:
//Callback Queue: this is queue space where callbacks are quequed sequentially which have to go in call stack
//event loop: it is like a watchman which always puts his eye on call stack and on callback queue.
           // this event loop will push callback into call stack  only when call stack is empty i.e, it has performed its js code.
           //then, callbacks will be executed.

//Now we will see where these call backs come from:
//browser has 2 things: js engine + webAPI
// when browser sees that there is an event, it gives it to webAPI's to handle this and js engine execute other js code.
//after finishing its code, these events when triggered generates its callbacks and they are sequentially stored in callback queues for its execution in call stack via event loop.
