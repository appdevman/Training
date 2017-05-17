function failure(){ alert("You May Not Pass!"); } // alerts for our .get event hanlders --> .done, .fail., .always
function success(){ alert("You May Pass!"); }
function always() { alert("Questions Answered."); }

function askYourQuestions(){
    $.get("/request", // http .get, pointing to specific route '/request'

    // Our form id=requestForm --> serialize the element data and send to endpoint
   $("#requestForm").serialize()).done(success).fail(failure).always(always); // and fire functions for each event handler, .done/.fail/.always
                                                             
  return false;
}
$(document).ready(function(){        //onload event handler wireup for clicking the requestButton
  $("#requestButton").click(askYourQuestions);
});