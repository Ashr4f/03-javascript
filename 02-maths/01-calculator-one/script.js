/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var numbersRegEx = /^[0-9]{1,}([.][0-9]{1,})?$/;
    var emptyAndWhiteSpaceRegEx = /^\s*$/;
    var firstInputField = document.getElementById("op-one");
    var secondInputField = document.getElementById("op-two");

    var firstInputFieldValue;
    firstInputField.addEventListener("input", () => {
        firstInputFieldValue = parseFloat(firstInputField.value.trim());
    });

    var secondInputFieldValue;
    secondInputField.addEventListener("input", () => {
        secondInputFieldValue = parseFloat(secondInputField.value.trim());
    });


    var resultsField = document.getElementById("results");

    function checkForNumbers() {
        if (!numbersRegEx.test(firstInputFieldValue) || !numbersRegEx.test(secondInputFieldValue)) {
            resultsField.value = "Chiffres uniquement";
        }
    }

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        resultsField.value = Math.max((firstInputFieldValue + secondInputFieldValue) * 100) / 100;
        checkForNumbers();
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        resultsField.value = Math.max((firstInputFieldValue - secondInputFieldValue) * 100) / 100;
        checkForNumbers();
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        resultsField.value = Math.max((firstInputFieldValue * secondInputFieldValue) * 100) / 100;
        checkForNumbers();
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        resultsField.value = Math.max((firstInputFieldValue / secondInputFieldValue) * 100) / 100;
        checkForNumbers();
    });

})();