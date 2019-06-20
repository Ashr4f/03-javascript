/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var firstInput = document.getElementById("pass-one");
    var secondInput = document.getElementById("pass-two");

    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    function removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }

    document.getElementById("run").addEventListener("click", () => {

        if (firstInput.value !== secondInput.value) {
            addClass(firstInput, "error");
            addClass(secondInput, "error");
        } else {
            removeClass(firstInput, "error");
            removeClass(secondInput, "error");
        }

    });
})();