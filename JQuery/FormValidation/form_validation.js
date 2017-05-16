$(document).ready(function () { // onload wireup of handlers etc.
    var validationObj = $("#simpleForm").validate({ // validate the specified form and place results in var
        rules: { // set desired element validation rules
            name: { required: true, minlength: 5 },
            email: { required: true, email: true },
            password1: {
                required: true, rangelength: [6, 12],
                equalTo: "#password2"
            },
            birthDate: { required: true, date: true },
            class: { required: true, rangelength: [2, 2] },
            hands: { required: true },
            armor: { required: true, minlength: 2 }
        },
        messages: { // set desired messages for elements
            password1: { equalTo: "Passwords Do Not Match" },
            class: { rangelength: "Select 2 class types" },
            armor: { minlength: "2 Pieces of Armor Required" },
        },
        errorPlacement: function (error, element) { // adjust error message placement
            if (element.is(":radio")) {
                error.insertAfter($("input:radio:last").next("label"))
            }
            else if (element.is(":checkbox")) {
                error.insertAfter($("input:checkbox:last").next("label"))
            }
            else { error.insertAfter(element) }
        }
    });
    validationObj.form(); // check to see if form is valid. NOTICE this is in the onload event for entire page.
                          // Messages such as "this is a required field" are all made visible, etc....on page load.

    $("form").submit(function (e) {  // engage submit
        if (!validationObj.form()) { // if not valid...
            alert("Form Errors");    // throw alert
            e.preventDefault();      // preven the submit
        }
    });
});