/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var inputField = document.getElementById("pass-one");
    var validity = document.getElementById("validity");
    var passwordRegEx = /^(?=.*?.*\d.*\d.*).{8,}$/i;

    inputField.addEventListener("input", function () {
        if (passwordRegEx.test(inputField.value)) {
            validity.innerHTML = "ok";
        } else {
            validity.innerHTML = "Pas ok";
        }
    });
})();