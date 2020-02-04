// Type inside this function
function isValidHex(text) {
    const hexRegEx = /^#[A-F0-9]{6}$/i;
    return hexRegEx.test(text);
}

const hex = document.getElementById("hex");
const body = document.getElementsByTagName("body")[0];

hex.addEventListener("input", e => {
    const text = e.target.value;
    const valid = isValidHex(text);
    if (valid) {
        body.style.backgroundColor = "rgb(176, 208, 168)";
    } else {
        body.style.backgroundColor = "rgb(189, 86, 86)";
    }
});

/*
This challenge contains a form that will accept a first and last name (separated with a space),
and display the last name first, then a comma, then a space, then the first name.
Your challenge is to create a variable newText, and assign a replacement string to that variable.
Be careful to match the exact variable name, because that's what is passed into replace().
You'll also need to reference the values captured by the parentheses in the regex.
*/

function reformatName(text) {
    const rawName = /^(\w+)\s(\w+)$/;

    // Type your answer on line 5, below:
    const newText = "$2, $1";

    return text.replace(rawName, newText);
}

const form = document.querySelector("form");
const input = form.querySelector("input");
const reformatted = document.getElementById("reformatted");

form.addEventListener("submit", e => {
    e.preventDefault();
    reformatted.textContent = reformatName(input.value);
});
