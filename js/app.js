const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/**
 *
 * VALIDATORS
 *
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
    //this will limit to only lowercase letter and one word together without space
    return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
    return /^[A-Za-z0-9]+$/.test(password);

    // FOLLOWING DOES THE SAME BUT THIS FEATURE IS ADVANCED NOT COVERED YET.
    // LOOKAHEAD FEATURE
    // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);
}

// Must be a valid email address
function isValidEmail(email) {
    //following works with one@example.com but not one@example.co.uk
    // return /^[^@]+@[^@.]+\.[a-z]+$/.test(email);

    //following works for any kind of email from w3c and mdn
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
    );
}

/**
 *
 * FORMATTING FUNCTIONS
 *
 */

function formatTelephone(text) {
    //each replacement part you want need to be in parans, here 3 parans means 3 parts.

    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    const replacement = "($1) $2-$3";

    return text.replace(regex, replacement);
}

/**
 *
 * SET UP EVENTS
 *
 */

function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
        element.style.display = "inherit";
    } else {
        element.style.display = "none";
    }
}

function createListener(validator) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip);
    };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

//Blur event is called when input leaves focus
telephoneInput.addEventListener("blur", e => {
    e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));
