/*
.ready() runs on page-load automatically
.each implementation & .map implementation
*/
$(document).ready(function () {
    $("input:eq(0)").click(function () { // click event of first button
        /* .each */
        $("p").each(function () { // for each <p> tag on the entire page
            var parts = $(this).html().split(" "); // split the text value into two cell array --> cell0) number for font size  cell1) for color name
            $(this).css({ "font-size": parts[1] + "px", color: parts[0] }); // use these cell values to set font-size and font-color
        });
    });
    $("input:eq(1)").click(function () { // click event of the second button
        /* .map */
        var items = $("p").map(function () { // for each <p> tag on the entire page
            var parts = $(this).html().split(" "); // split the text value into two cell array --> cell0) number for font size  cell1) for color name
            return { color: parts[0], size: parts[1] }; // create key/value pair for this iteration
        }).get(); // convert the results of .map to javascript array var items

        for(var idx in items) { // for every item in items array
            var item = items[idx]; // give me this iteration's item
            var span = $("<span>" + item.color + "</span>"); // put the item color text between the span tags
            var size = item.size*5; // use size property to increment size. Wonky but is a mechanism used here.
            span.css({"background-color":item.color, "font-size":item.size+"px", width:size, height:size}); // adjust span obj attributes using item
            $("div").append(span); // add a child to div element, our new customized span
        }
    });
});