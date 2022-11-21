//little practice with click event
//change the color and background of buttons
const allButtons = document.querySelectorAll(".my-buttons button");
for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "blue"
    })
}
