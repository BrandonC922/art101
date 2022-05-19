//Author: Brandon Christensen
//Created: May 18, 2022
//Class: Art 101
// LAB 13

// Creating a function
maxFactors = 4;

outputEl = document.getElementById("output");

function getFactorObj() {
  var factorObj = {};
  for (var factor=0; factor<maxFactors; factor++) {
    numId  = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    console.log(factor + "num:", numValue, "text:", textValue)

    if (numValue && textValue) {
      factorObj [numValue] = textValue;
    }

  }
  return factorObj;
}

function outputPage(str) {
  newEl = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj){
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";

    for (var factor in factorObj) {

      if (num % factor == 0) {
        outputStr += factorObj [factor];

      }
    }
    if (outputStr) {
       outputStr = " - " + outputStr + "!";
    }
    outputPage(num.toString() + outputStr)
  }

}
document.getElementById("submit").addEventListener("click", function()
{
  var max = document.getElementById("max").value;
  console.log("max:", max)

  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);

  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})
