let form = document.querySelector(".form");
form.addEventListener("submit", getInitial);

function getInitial(e) {
    e.preventDefault(); //prevents the form from reloading

    let initials = document.getElementById("initials").value; //get staff initial value from input
    let outputElement = document.querySelector(".full-name");

    let fullName = ""; // the result is an empty string becaue i dont know wat it will be

    if (initials === "DW") {
        fullName = "Dabotubo Whyte";
    } else if (initials === "KA") {
        fullName = "archibong kufre";
    } else if (initials === "NE") {
        fullName = " nze emmanuel";
    } else if (initials === "iro") {
        fullName = "samuel";
    } else if (initials === "SK") {
        fullName = "simeon kenneth";
    } else if (initials === "PF") {
        fullName = "Pueneh faith";
    } else if (initials === "AF") {
        fullName = "amos faith";
    } else if (initials === "EF") {
        fullName = "ebebeinwe favour";
    } else {
        fullName = "you're not a member of our company";
    }

    outputElement.textContent = fullName; //display the fullname in the DOM
}