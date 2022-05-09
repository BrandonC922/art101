//Author: Brandon Christensen
//Created: May 8, 2022
//Class: Art 101
// LAB !0

// Declar Variables
var button = document.getElementById('my-button');
var output = document.getElementById("output");

//Button Listenser
button.addEventListener("click", function(){
  var username = document.getElementById('username').value;
  var nameArray = username.split('');
  var nameArraySort = nameArray.sort();
  var nameSorted = nameArraySort.join('');
  output.innerHTML = nameSorted;
});
