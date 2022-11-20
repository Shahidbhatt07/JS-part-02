//click event on multiple buttons
const allButtons = document.querySelectorAll(".my-buttons button");
//for of
// for (let button of allButtons) {
//     button.addEventListener("click", function () {
//         console.log(this.textContent);
//     })
// };

//for
// for (let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function () {
//         console.log(this);
//     })
// }

//forEach
allButtons.forEach(function(button){
    button.addEventListener("click", function () {
        console.log(this);
    });
})