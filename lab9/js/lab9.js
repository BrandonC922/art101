//Author: Brandon Christensen
//Created: May 4, 2022
//Class: Art 101

//use getelement and assign it to a variable
var outputEl = document.getElementById("output");

//create a new element assign to variables
var new1El = document.createElement("p");

// change html attribute to say something new
new1El.innerHTML = "Say something new.";

// new element assigned to new2El

var new2El = document.createElement("p");

//change the html atrribute of new2El to say something

new2El.innerHTML = "Say Something Else";

//append both items to your output div

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

//change the css of two elements
new1El.style.color = "lightgreen";

new2El.style.color = "Red";
