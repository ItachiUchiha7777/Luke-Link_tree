function copyText() {
    /* Get the text element */
    var textToCopy = "Nugget#7647";

    /* Create a temporary input element */
    var tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.value = textToCopy;

    /* Append the temporary input element to the body */
    document.body.appendChild(tempInput);

    /* Copy the text from the input element */
    tempInput.select();
    document.execCommand("copy");

    /* Remove the temporary input element */
    document.body.removeChild(tempInput);

    /* Alert the user with clear instructions */
    alert("Username copied!\nTo add the username in Discord, go to the 'Add Friends' section, and paste the copied username in the input field.");
}