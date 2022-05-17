//Author: Brandon Christensen
//Created: May 16, 2022
//Class: Art 101
// LAB 12

//Creating a Sorting Function

function sortingHat(str) {
  len = str.length
  mod = len % 4

  if (mod == 0) {
  return "GRYFFINDOR"
}
else if (mod == 1) {
  return "HUFFLEPUFF"
}
else if (mod == 2) {
  return "SLYTHERIN"
}
else if (mod == 3) {
  return "RAVENCLAW"
}
}
//Make a button
var myButton = document.getElementById("button")

//Make and Event listener for the button
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  answer = "You have been placed in: " + house ;
  document.getElementById("output").innerHTML = answer;
})
