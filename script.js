//your JS code here. If required.
// script.js

document.getElementById("fname").addEventListener("blur", function() {
    var inputField = document.getElementById("fname");
    inputField.value = inputField.value.toUpperCase();
});
