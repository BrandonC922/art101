//Author: Brandon Christensen
//Created: April 25, 2022
//Class: Art 101

//Define Variables
var year = 2012;

var age = 2022 - year;

var myTransport = ["Walking", " Running", " Metro Bus", " Uber" , "Lyft"];

var myMainRide = {
    make: "Tesla",
    model:"S",
    year: 2012,
    color: "Black",
    age: age };

//Output for HTMl
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
