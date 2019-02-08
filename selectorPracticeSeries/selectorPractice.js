// Selector practice

// var body = document.querySelector("body"); - selects the relevant portion of the document object.

// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector - Handles CSS style selector. Ex. document.querySelector(".id"), document.querySelector("#class"),document.querySelector("h1") Only returns 1st element.
// querySelectorAll - Selects by all of "query".

// Select the first paragraph in selectorPractice.html 4 different ways.
var first = document.getElementById("first");
var second = document.getElementsByClassName("special")[0];
var third = document.querySelector("p");
var fourth = document.querySelector("#first");

// Style alteration using selectors. 
// Separation of concerns: HTML = structure, CSS = presentation, JS = Behavior. Should not overlap too much.

// Accessing content and HTML content. 
// Editing attributes: .getAttribute("href");, .setAttribute("href", "www.dogs.com"), etc.