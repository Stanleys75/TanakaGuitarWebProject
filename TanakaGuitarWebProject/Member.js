document.getElementById("forms")
.addEventListener("submit", (e) => {
    e.preventDefault();
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var address = document.getElementById("address").value
    var gender = document.getElementsByName("gender")
    var dailybox = document.getElementById("Daily")
    var note = document.getElementById("note").value


    if (username.length < 5){
        alert("Username is invalid!");
        return;
    }
    if (!validateEmail(email)){
        alert("Email is invalid!");
        return;
    }
    if (address.length < 10){
        alert("Plese Fill Your Complete Address !");
        return;
    }

    if(!(gender[0].checked || gender[1].checked)){
        alert("Please Select Your Gender!");
        return;
    }

    if(!dailybox.checked){
        alert("Please agree the daily letter!");
        return;
    }
    if (note.length < 10){
        alert("Plese Fill the Note !");
        return;
    }
    var confirmResult = confirm("Are you sure you want to register");
    if(confirmResult){
        console.log ("Form submitted");
    } else {
        console.log("Form cancelled");
    }

    
})
   
function validateEmail(email){
    return (email.indexOf("@") != -1) && (email.endsWith(".com"));
}