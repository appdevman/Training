// Node.js express server is not required for this code sample to run, just load your web browser.

function updateImages(data) {
  for (i=0; i<data.length; i++){ //loop through the key/value pairs of the json file
      var imageInfo = data[i]; // pull one cell's worth of data and assign to var

     // create img tag and set its src attribute to image property value from imageInfo
     var img = $('<img />').attr("src", "/images/" + imageInfo.image);

    var title = $("<p></p>").html(imageInfo.title); // create P tag for the title, inserting the imageInfo.title property value
    var div = $("<div></div>").append(img, title);  // create DIV tag & append the IMG & TITLE tags we created above
    $("#images").append(div); // place the DIV created above into the <div id=images> tag in the html page
  }
}
$(document).ready(function(){ // jquery onload event handler wireup
    $.get("data/images.json", updateImages); // on page load, unconditionally always make http GET request for images.json file,
                                             // and feed it to updateImages function
});