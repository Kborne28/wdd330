
// creating an object Array filled with fruit
var fruitslist = new Array("Orange", "Apple", "Banana", "Cherry");

//creating a newParagraph variable, telling it to create a new html element when called
var newParagraph = document.createElement("p");
//creating viewable text dynamically - in this case, it's displaying the fruitslist array
var newText = document.createTextNode("List of Fruits : " + fruitslist);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);

var newfruitslist = fruitslist.slice(1, 3);
var newParagraph = document.createElement("p");
var newText = document.createTextNode("Extract Fruits List : " + newfruitslist);
newParagraph.appendChild(newText);
