//Variables
const headerElement = document.createElement('h1'); //<-- Creating a h1 element
const test = document.querySelector('#test'); //<-- QuerySelector will find the first element with id="test";
const body = document.body; //<-- This will find the element name 
const divElement = document.createElement('div'); //<-- Creating a Div element
const paragraphElement = document.createElement('p'); //<-- Creating a paragraph element

test.append(headerElement); // <-- insert the new created h1 element in the test div container.
test.append(divElement); // <-- insert new div in the test div
divElement.appendChild(paragraphElement); //<-- insert new paragraph in the div container


//Changing the CSS with JavaScript  

headerElement.style = "color: blue; text-align: center;"; //<-- add in line css to h1 element

body.style = "background-color: #B9B6B5"; //<-- add background color to the body

//Add id attribute to the containers
divElement.id = "container"; //<-- Add the id attribute to the new div container
paragraphElement.id = "paraHome"; //<-- Add the id Attribute to the paragraph.

headerElement.innerText = "Home"; //<-- add text to the h1 element
paragraphElement.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu dolor in dolor volutpat lobortis ut non est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non odio placerat, feugiat mauris eu, interdum libero. Nullam maximus quam eu leo condimentum interdum. Ut pulvinar ac purus ac tincidunt. Vestibulum eu lorem vel quam porta tristique. Nam mollis sed nisi sed semper."; //<-- Add text to the paragraph
