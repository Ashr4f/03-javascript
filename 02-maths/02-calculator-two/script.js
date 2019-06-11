/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    var numbersRegEx = /^[0-9]{1,}([.][0-9]{1,})?$/;
    var emptyAndWhiteSpaceRegEx = /^\s*$/;
    var firstInputField = document.getElementById("op-one");
    var secondInputField = document.getElementById("op-two");
    var resultsField = document.getElementById("results");

    var firstInputFieldValue;
    firstInputField.addEventListener("input", () => {
        firstInputFieldValue = parseFloat(firstInputField.value.trim());
    });

    var secondInputFieldValue;
    secondInputField.addEventListener("input", () => {
        secondInputFieldValue = parseFloat(secondInputField.value.trim());
    });

    function checkForNumbers() {
        if (!numbersRegEx.test(firstInputFieldValue) || !numbersRegEx.test(secondInputFieldValue)) {
            resultsField.value = "Chiffres uniquement";
        }
    }


    const performOperation = operation => {
        // perform the operation
        switch (operation) {
            case "addition":
                resultsField.value = Math.max((firstInputFieldValue + secondInputFieldValue) * 100) / 100;
                checkForNumbers();
                break;
            case "substraction":
                resultsField.value = Math.max((firstInputFieldValue - secondInputFieldValue) * 100) / 100;
                checkForNumbers();
                break;
            case "multiplication":
                resultsField.value = Math.max((firstInputFieldValue * secondInputFieldValue) * 100) / 100;
                checkForNumbers();
                break;
            case "division":
                resultsField.value = Math.max((firstInputFieldValue / secondInputFieldValue) * 100) / 100;
                checkForNumbers();
                break;

            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();