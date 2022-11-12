//Change the styles of element
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);  //CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "yellow";
mainHeading.style.border = "5px solid green";

/*Note: we know in CSS, background-color posesses dash(-) in between these two words,
but, in JS we cant use them as like the are i.e, dashed. So we use them as in camelCase,
i.e, e.g, backgroundColor etc.*/

