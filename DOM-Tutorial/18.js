//this keyword inside eventListner callback
const btn = document.querySelector(".btn-headline");
//in case of anonymous/normal function
function func() {
    console.log("value of this",this);
}
btn.addEventListener("click", func);  //value of this    <button class="btn btn-headline">Learn More</button>

//in case of arrow functions
btn.addEventListener("click", () => {
    console.log("value of this",this);
})        //value of this   Window {window: Window, self: Window, document: document, name: '', location: Location, …}