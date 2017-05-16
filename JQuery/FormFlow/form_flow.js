var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
              "Aug", "Sep", "Oct", "Nov", "Dec"];
var sArr = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
  "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN",
  "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR",
  "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

function buildSelects() {
    for (var i in sArr) { $("#state, #stateB").append($('<option>' + sArr[i] + '</option>"')); } // populate selects based on array vals above
    for (var i in months) { $("#expiresM").append($('<option>' + months[i] + '</option>"')); }   // "
    for (var y = 2015; y < 2020; y++) { $("#expiresY").append($('<option>' + y + '</option>"')); } // populate expires based on 2020
}
function updateAddr() { // if checkbox selected, copy over vals to BillingInfo part of form
    var cb = $("#cbSame");
    if (cb.prop("checked")) {
        $("#nameB").val($("#name").val());
        $("#addrB").val($("#addr").val());
        $("#cityB").val($("#city").val());
        $("#stateB").val($("#state").val());
        $("#zipB").val($("#zip").val());
        $("#addrB, #cityB, #stateB, #zipB").prop("disabled", "disabled");
    } else { $("#addrB, #cityB, #stateB, #zipB").prop("disabled", ""); }
}
function updatePaymentType() { // show PayPal section if PP is selected, otherwise show ccinfo
    if (this.id == "ppal") {
        $("#ccInfo").hide();
        $("#ppInfo").show();
        $("#ppEmail").focus();
    } else {
        $("#ppInfo").hide();
        $("#ccInfo").show();
        $("#cardNum").focus();
    }
}
$(document).ready(function () { // pageload wireup
    $("#ppInfo").hide();//hide paypal section
    buildSelects(); // populate selects
    $("#cbSame").click(updateAddr); //wire up event handler for billinginfo checkbox method, to copy over vals
    $("input:radio").click(updatePaymentType); // wire up event handler for showing paypal or cc, depending on what radio is selected
    $("form").submit(function (e) { 
        alert("Sorry. Not yet Implemented.");
        e.preventDefault();
    });
    $("#resetB").click(function (e) { // reset form
        if (confirm("Are you sure?")) { $("form").get(0).reset(); }
    });
});