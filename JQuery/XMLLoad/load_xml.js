function updateTable(data){ // results from ajax call (data) sent to this function
  var parks = $(data).find("park"); // convert DOM object to jQuery object, find-and-grab all 'park' elements, assign to jQuery array
  parks.each(function(){ // jQuery "for-each" iteration using .each on the array
    var tr = $("<tr></tr>"); // create a table-row html element
    tr.append($("<td></td>").html($(this).children("name").text())); // create html table-cell, place this record's name value inside, & append to inside of tr
    tr.append($("<td></td>").html($(this).children("location").text())); // same for location value, append to inside of tr
    tr.append($("<td></td>").html($(this).children("established").text())); // same for established, append to inside of tr
    var img = $('<img />').attr("src", "/images/"+$(this).children("image").text()); // create img tag with src from this record's image value
    tr.append($("<td></td>").append(img)); // append image tag to inside of td, then append the entire td to inside of tr
    $("tbody").append(tr); // append tr to inside of tbody
  });
}
$(document).ready(function(){ // page onload event wireup
  $.get("parkdata.xml", updateTable); // unconditionally perform http-get to the local server for pagename parkdata.xml, send results to updateTable()
});