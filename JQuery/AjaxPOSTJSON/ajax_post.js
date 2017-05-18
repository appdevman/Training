/* start node.js server and invoke this page with http://localhost:81/ajax_post.html */
function setTrip(data) { // set the html elements with trip info (details pane)
  $("#idx").html(data.idx);
  $("#title").html(data.title);
  $("#photo").attr("src", "/images/"+data.image);
  $("#date").html(data.date);
  $("label:first").html(data.days);
  $("label:last").html(data.location);
  $(".star:gt("+(parseInt(data.rating)-1)+")").attr("src", "/images/empty.png"); //zero-based array parsing to set empty star
  $(".star:lt(" + (parseInt(data.rating)) + ")").attr("src", "/images/star.png");    //zero-based array parsing to set gold star
}
function getTrip(idx){ // get trip info for specified index
  $.get("/getTrip", {idx: idx}, setTrip); // call endpoint, send response to setTrip
}
function setList(data){ // setting up click handler for left navigation buttons
  var items = [];
  $.each(data, function(key, val) { // for each button, add getTrip event handler
    var item = $("<span></span>").html(val.title); // grab title value for span element
    item.click(function(){getTrip(val.idx)}); // wireup getTrip on span item click
    $("#leftNav").append(item); // append new span inside of id=leftNav DIV element
  });      
}
function sendRating(){ // event handler for clicking on stars (new ratings)
    var idx = $("#idx").html(); // assign existing html text for hidden <span id="idx"> to var
  var rating = $(".star").index($(this))+1; // zero-based index, add +1 for being able to get which of the five stars was clicked on 
  $.post("/setRating", {idx: idx, rating: rating}, setTrip); // invoke endpoint to set rating for this index, send response to setTrip
}
$(document).ready(function(){ // onload: get info & initialize.....and wireup of events
  $.get("/getList", setList).done(function(){ // get vacation info-->send response data to setList-->set info & prepare links for clicks. Upon completion with .done-->
     $("span:first").click(); return false; });//  force click() event on first <span> element, to call getTrip & set vacation content. This initializes the page essentially.
  $(".star").click(sendRating); // general event wireup: handle clicks on stars, fire sendRating
});