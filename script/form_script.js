const form = document.querySelector(".signup-form");

form.addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting
    let valid = true

    const fname = this.querySelector("#firstname");
    const email = this.querySelector("#email");
    const phone = this.querySelector("#phone");
    const pass = this.querySelector("#pass");
    const cpass = this.querySelector("#cpass");

    if (fname.value.trim().length <= 0) {                                           //Checking firstnaame
        document.getElementsByClassName("f-error")[0].style.display = 'block';
        valid = false;
    }
    if (email.value.trim().length <= 0 || !(email.checkValidity())) {               //Checking email
        document.getElementsByClassName("mail-error")[0].style.display = 'block';
        valid = false;
    }
    if (phone.value.trim().length <= 0 || !(phone.checkValidity())) {               //Checking phone
        document.getElementsByClassName("phone-error")[0].style.display = 'block';
        valid = false;
    }
    if (!(pass.value === cpass.value)) {                                            //Checking if passwords match
        valid = false;
    }
    if (valid == false) {
        alert("Goddammit !!!")
    }
});

form.querySelectorAll("input").forEach(function(elem) {
    elem.addEventListener("blur", function(e) {
        checkForError(elem);
    })
})

function checkForError(element) {
    if (element.getAttribute("type") == 'text') {
        if (element.value.length <= 0) {
            document.querySelector('.f-error').style.display = 'block';
        }
        else {
            document.querySelector('.f-error').style.display = 'none';
        }
    }
    if (element.getAttribute("type") == 'email') {
        if (!element.checkValidity) {
            document.querySelector('.mail-error').style.display = 'block';
        }
        else {
            document.querySelector('.mail-error').style.display = 'none';
        }
    }
    if (element.getAttribute("type") == 'number') {
        if (!element.checkValidity) {
            document.querySelector('.phone-error').style.display = 'block';
        }
        else {
            document.querySelector('.phone-error').style.display = 'none';
        }
    }
    if (element.getAttribute('type') == 'password') {
        let cpass = document.getElementById('cpass')
        let pass = document.getElementById('pass')
        if (pass.value.length > 0) {
            if (cpass.value.length > 0 && !(cpass.value === pass.value)) {
                document.querySelector('.cpass-error').style.display = 'block';
            }
            else {
                document.querySelector('.cpass-error').style.display = 'none';
            }
        }
        if (cpass.value.length > 0) {
            if (pass.value.length > 0 && !(cpass.value === pass.value)) {
                document.querySelector('.pass-error').style.display = 'block';
            }
            else {
                document.querySelector('.pass-error').style.display = 'none';
            }
        }
    }

}

const theme_btn = document.getElementById("theme_change")
theme_btn.addEventListener("change", function(e) {
    if (theme_btn.checked) {
        const body = document.querySelector("body")
        body.classList.add("dark-mode")
    }
    else {
        const body = document.querySelector("body")
        body.classList.remove("dark-mode")
    }
})

