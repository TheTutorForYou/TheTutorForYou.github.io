function main() {
    console.log("workss");
    setUpSignUpButtons();
}

function setUpSignUpButtons() {
    const signUpButtons = $(".signUpButton");
    for (e of signUpButtons) {
        e.addEventListener("click", signUpButtonClicked);
    }
}

function signUpButtonClicked() {
    window.open("./#contact")
}

function $(aString) {
    return document.querySelectorAll(aString);
}

window.onload = main;