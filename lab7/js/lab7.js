//Author: Brandon Christensen
//Created: April 27, 2022
//Class: Art 101

//Function to takes and sorts a user given username
function sortUserName() {

var username = window.prompt("Hi. Please tell me your name so I can fix it.");
console.log("username =", username);

// split string to Arrays

var nameArray = username.split('');
console.log("nameArray =", nameArray);

// sort the Arrays

var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);

//join array back to stringif

var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);

//returns sorted name

return nameSorted;
}
//Output
document.writeln("Oh hey, I've fixed your name: ",
sortUserName(), "</br>");
