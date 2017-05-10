function update() {
    $("span").css("background-color", "light-grey"); // set all span tags bg color to light grey
    $("div").each(function (i) {                     // iterate through the child elements within the in-scope DIV object (based on keyup scope)
        var $input = $(this).children("input:first");// in current DIV, return the first input textbox found
        var $value = $input.val();                   // assign its text value to a jquery object
        var filter = "span:lt(" + $value + ")";      // create a standard string variable to be used below, and promote easy readability
        $input.siblings(filter).css("background-color", "blue"); // set bg color for all span-elements at same level as the textbox (siblings),
                                                                 // ...less than the value entered by user. 
                                                                 // Zero-based will give desired results with "lt" (bubble 4,3,2,1,0 gets color)
                                                                 // "all the span elements less than 5, color them"
    })
}