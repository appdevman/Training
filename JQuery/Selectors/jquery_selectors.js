function setEven() {
    $("li, span").css("font-weight","");//basic selector--> select all list & span elements -->set their font-weight attribute value to empty-string
    var $evenItems = $("li:even");//content selector--> select the even-number list items ---> assign to array obj
    $evenItems.css("font-weight", "bold"); //set font-weight attribute value to "bold", for each item in the array
    $("span:contains(Even)").css("font-weight", "bold"); //if span element contains inner-text (between the tags) "Even", change font-weight to bold
    $(".label").html("Even");//select all elements with class "label", set HTML to "Even".   This will change the text for <p> tag to "Even"
}

function setOdd() {  //same as above, but for odd
    $("li, span").css("font-weight", "");
    var $oddItems = $("li:odd");
    $oddItems.css("font-weight", "bold");
    $("span:contains(Odd)").css("font-weight", "bold");
    $(".label").html("Odd");
}

function setFirst4() {
    $("li, span").css("font-weight", ""); // same as above
    var $first4 = $("li:lt(4)");          // content-selector--> with "less-than 4".  Give all list-elements that come before zero-index of 4 -->
                                          //                     and assign array to object.
    $first4.css("font-weight", "bold");   // //set font-weight attribute value to "bold", for each item in the array
    $("span:contains('First 4')").css("font-weight", "bold");//if span element contains inner-text (between the tags) "First 4",
                                                             //change font-weight to bold
    $(".label").html("First 4");//select all elements with class "label", set HTML to "First 4".   This will change the text for <p> tag to "First 4"
}
