//Author: Brandon Christensen
//Created: May 2, 2022
//Class: Art 101

// Declaring a variable Arrays
var array = [2,4,6,8,10,12];

// printing Arrays
console.log("My array", array);

//Declaring a function
function MultiplyByNine(x){
  var results = (x*9)
  return results;
}

//testing Functions and printing
console.log("Function results for 7:", MultiplyByNine(7));
console.log("Function results for 12:", MultiplyByNine(12));
console.log("Function results for 36:", MultiplyByNine(36));
//Declar Map variable
var mapped = array.map(MultiplyByNine);

// printing Results
console.log("Multiplying the array by 9:", mapped);

// declare variable for anonymous function
var anonymous = array.map(function(x) {
    var results = (x ** 2)
    return results;
})

//printing anonymous Functions

console.log("Anonymous function squaring the array:", anonymous);
