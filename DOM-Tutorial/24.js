//keypress Event
const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e.key);
})

//mouseover
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", () => {
    console.log("mouseover event occured");
}) 

//mouseleave
mainButton.addEventListener("mouseleave", () => {
    console.log("mouseleave event occured");
}) 