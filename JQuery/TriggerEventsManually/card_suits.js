function inputHandler(e) { // append to the colorful <P> at top of screen
    var chr = String.fromCharCode(e.charCode); // get the charCode from passed param
    $("p").append(chr); // append it
}

function spanHandler(e) { // handle clicks on the four cards
    var chrCode = e.target.innerHTML.charCodeAt(0); // get char code from param, the one clicked
    $("input").trigger({ 'type': 'keypress', 'charCode': chrCode }); // manually fire inputHandler event, because it was wired in ".ready"
}

$(document).ready(function () {
    $("input").keypress(function (e) { inputHandler(e) }); // wire up textbox keypress event to inputHandler 
    $("span").click(function (e) { spanHandler(e) });      // wire up all spans click event to spanHandler, which manually triggers textbox event
    alert("hi");
});