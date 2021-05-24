///<reference path="https://ajax.googlepis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
///XML reference

function validateForm(event) {
     //Gather all HTML inpiut/textare values into a collection rather than creating a seperate variable for each
    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    let validationMessages = document.getElementsByClassName('invalid');
    console.log(validationMessages);

    //regular expression for email - JS object used for pattern matching
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Check te length of all controls and if any havent been filled our bythe user we are going to stop the form from submitting 
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value)) {
        //Stop form from submitting
        event.preventDefault();

        //Check each control individually and display the approperate error message if any come back wrong
        //Name validation - length
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "** Name is required **";
        }
        else {
            validationMessages['rfvName'].textContent = "";

        }
        //Subject validation
        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "** Subject is required **";
        }
        else {
            validationMessages['rfvSubject'].textContent = "";

        }
        //Message validation
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "** Message is required **";
        }
        else {
            validationMessages['rfvMessage'].textContent = "";

        //Email validation
        }
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "** Email is required **";
        }
        else {
            validationMessages['rfvEmail'].textContent = "";

        }

        //Email Regular Expression
        if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "** Please provide a valid email **";
        }

        if (rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }
    }
}