function updateCountryView(){
    var ddCountry = document.getElementById("ddTravel");
    var divCountry = document.getElementById("divCountry");
    if (ddCountry.value =="Yes") {
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }
}

function validateForm(){
    var DoB = document.querySelector("#txtDoB");
    var divDobError = document.querySelector("#divDobError")
    var formIsValid = true;
    if (DoB.value =="") {
        //error message
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The date of birth can not be empty.";
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else{
        var DoBDate = new Date(DoB.value);
        var today = new Date();
        if(DoBDate >= today){
            //error message
            divDobError.classList.remove("invisible");
            divDobError.innerHTML = "The date of birth must be before today's date.";
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else{
            divDobError.classList.add("invisible");
            divDobError.innerHTML = ""
            DoB.classList.remove("hasError");
        }
    }

    var ddCountry = document.querySelector("#ddTravel");
    if(ddCountry.value =="Yes")
    {
        var txtCountry = document.querySelector("#txtCountry")
        if (txtCountry.value = "") {
            document.querySelector("divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else{
            document.querySelector("divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~', '`', '&', '<', '>', '"'];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) !=-1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
            
        }
        
    }
    return formIsValid;
}