function changeCheckbox() { // Checkbox toggle animations back/forth
    var checkbox = $("#" + $(this).attr("for")); // get value for "for" attribute
    if (checkbox.prop("checked")) { // if checked, apply 'checked' animation
        $(this).children("img").animate({
            opacity: .5, height: 40,
            "border-width": "1px"
        }, 500);
    }
    else { // otherwise toggle back to 'unchecked' animation
        $(this).children("img").animate({
            opacity: 1, height: 60,
            "border-width": "2px"
        }, 500);
    }
}
function changeRadio() { // the four buttons near the top--> upon selection, change color of button to show like its "selected"
    $(this).animate({ opacity: .1 }, 400, function () {
        $("input:radio").next("label").removeClass("rb_checked"); // remove checked styles
        $(this).addClass("rb_checked"); // add checked styles
        $(this).animate({ opacity: 1 }, 800);// set
    });
}
$(document).ready(function () { // onload prep, event handlers, etc.
    $("form").hide();  // form hidden
    $("p").click(function () { // expand form to visible if P head clicked
        $("form").toggle(1000);
        return false; // cuts out of operations
    });
    $("input:submit").mousedown(function () { // submit button event handler for mouse down, 
        $("form").toggle(1000); return false; // fold back up and cut out operations
    });
    $("textarea").focus(function () { // when the textarea gets in focus, animate --> expand box size
        $(this).animate({ width: 350, height: 100 }, 1000);
    });
    $("textarea").blur(function () { // when textarea blur (leaves focus), animate --> shrink back down
        $(this).animate({ width: 200, height: 50 }, 1000);
    });
    $(".rb").click(changeRadio); // radiobutton class members click handler
    $("input:checkbox").prop("checked", false); // checkbox initializer to unchecked
    $(".cb").click(changeCheckbox); // checkbox class members click handler
    $("input:text").keyup(function () { // textbox handler for each character typed
        $(this).next("label").html($(this).val()); // set next label info's html
    });
    $("#submit").mouseover(function () { // mouseover handler for submit button (by id)
        $(this).animate({
            "background-color": "#0000FF",
            "width": "140px"
        }, 400, "linear");
    });
    $("#submit").mouseout(function () { // mouseout handler
        $(this).animate({
            "background-color": "#3377FF",
            "width": "60px"
        }, 400, "linear");
    });
    $("#submit").focus(function () { //focus handler
        $(this).animate({
            "background-color": "#0000FF",
            "border-width": "5px"
        }, 400, "linear");
    });
    $("optgroup").mouseover(function () { // all optgroup elements mouseover handler, stop animation
        $(this).stop(true).animate({ "font-size": "18px" }, 200);
        return false;
    });
    $("optgroup").mouseout(function () { // all optgroup elements mouseout handler, stop animation
        $(this).stop(true).animate({ "font-size": "15px" }, 200);
        return false;
    });
});