//Author: Brandon Christensen
//Created: May 11, 2022
//Class: Art 101
// LAB 11

//Creating buttons for each section

$("#Challenges").append("<button id = 'ChallengeButton'> First button</button>");

$("#Problems").append("<button id = 'ProblemButton'> Second button </button> ");

$("#Results").append("<button id = 'ResultsButton'> Third button </button> ");

// Adding Event Listener to each button
$("#ChallengeButton").click(function(){
  $("#Challenges").toggleClass("red");

})

$("#ProblemButton").click(function(){
  $("#Problems").toggleClass("blue");

})

$("#ResultsButton").click(function(){
  $("#Results").toggleClass("green");

})
