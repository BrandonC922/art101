//Author: Brandon Christensen
//Created: May 24, 2022
//Class: Art 101
// LAB 15

// Getting the URL
 var endpoint = "https://xkcd.com/614/info.0.json";

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })
  .done(function(data){
  	$("#output").append("<h3>" + data.title + "</h3>");
  	$("#output").append("<img src=" + data.img + ">" + "<br>");
  	$("#output").append( data.alt );
  })
  .fail(function(request, error){
  	$("#output").html("Something fucked up.");
  })
}

$("button").click(getAjax);
