$(document).ready(function () {
    deferred_obj_test();
});

function deferred_obj_test ()
{
    var resultString="";
    function function1(n1, n2, p3) { resultString += "Problem: "; } //first function to run
    function function2(n1, n2) { resultString += n1 + " + ";}       //second function to run
    function function3(n1, n2) { resultString += n2 + " = ";}       //third function to run
    var deferredObj = $.Deferred(); //create deferred obj var
    // add functions to deferred obj in all 3 different ways
    // 1. first argument --> list of two functions --> function1 assigns "Problem: " to string, function2 appends n1 value & " + " 
    // 2. second argument--> single function to then fire --> appends n2 value & " = " 
    // 3. third argument --> anonymous method to then fire --> sums n1+n2, appends to resultString, then inserts var text into DIV
    // Results to page:  "Problem: 5 + 6 = 11"
    deferredObj.done( [function1, function2], function3).done(function(n1, n2) 
    { 
        resultString += n1 + n2;
        $("div").append(resultString);
    });
    deferredObj.resolve(5,6);
};