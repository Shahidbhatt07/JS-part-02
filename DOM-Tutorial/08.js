//Traversing DOM Tree
const rootNode = document.getRootNode();
console.log(rootNode); //#document
// const htmlElementNode = rootNode.childNodes;
// console.log(htmlElementNode); //NodeList [html]

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]

const headNode = htmlElementNode.childNodes[0];
console.log(headNode);  //<head>...</head>

// const titleNode = headNode.childNodes;
// console.log(titleNode); //NodeList(5) [text, title, text, script, text]

const titleNode = headNode.childNodes[1];
console.log(titleNode); // <title>Dom traversing</title>

//finding its parent node
// const textNode = headNode.childNodes[2];
// console.log(textNode.parentNode); //<head>...</head>


//sibling relationship
// const SiblingTextNode = headNode.childNodes[1];
// console.log(SiblingTextNode.nextSibling); //#text

//here is new condition: there might be various NS(new space lines) and we dont want them but we want elements which have content
// for this we use a property nextElementSibling
const SiblingTextNode = headNode.childNodes[1];
console.log(SiblingTextNode.nextElementSibling); //<script src="08.js" defer></script>

//Children Property
// if i dont want new space lines when getting the child elements we can use children property
const container = document.querySelector(".container");
console.log(container.children); //HTMLCollection(2) [h1, p]



//Select h1 heading and change body's text color and its background color
// const h1 = document.querySelector("h1");
// console.log(h1);
// const body = h1.parentNode.parentNode;
// console.log(body); 
// body.style.color = "red";
// body.style.backgroundColor = "grey";

//dosra tareqa body ko style karne ka
const body = document.body;
// console.log(body);
body.style.color = "#333"
body.style.backgroundColor = "efefef"


