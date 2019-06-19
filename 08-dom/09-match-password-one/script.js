/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var firstInput = document.getElementById("pass-one");
    var secondInput = document.getElementById("pass-two");
    var inputsColor = firstInput.style.borderColor;

    firstInput.style.borderColor = inputsColor;
    secondInput.style.borderColor = inputsColor;

    document.getElementById("run").addEventListener("click", () => {

        if (firstInput.value !== secondInput.value) {
            firstInput.style.borderColor = "#F00";
            secondInput.style.borderColor = "#F00";
        } else {
            firstInput.style.borderColor = inputsColor;
            secondInput.style.borderColor = inputsColor;
        }

    });

})();