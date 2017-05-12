// event handler
function clickHandler(e) {
    // access passed attribute info from param object "e"
    $("#"+e.data.objId).html(e.target.id = " says " + e.data.answer + " at X position: " + e.screenX);
}

// wire up JQuery object events, and provide attribute info to "e" param
$(document).ready(function () {
    $("#div1").on({ "click":clickHandler }, // handle clicking on the div with this specific ID
                  { "objId": "heading", "answer": "yes" }); // provide attribute info for the handler to access if necc

    $("#div2").on({ "click": clickHandler }, // handle clicking on the div with this specific ID
                  { "objId": "heading", "answer": "no" }); // provide attribute info for the handler to access if necc


    /* THIS WAY IS BUGGY AND WORKS INTERMITTENTLY!!  ABOVE WAY WORKS AWLAYS (SO FAR).
    $(document).on("click",
                   "#div2", 
                    {"objId":"heading", "answer":"no"}, 
                    clickHandler);*/
});