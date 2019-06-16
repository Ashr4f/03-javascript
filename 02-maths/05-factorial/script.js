/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function factorialize(x) {
        if (x === 0) {
            return 1;
        }
        return x * factorialize(x - 1);
    }

    document.getElementById("run").addEventListener("click", () => {
        var numberFieldValue = document.getElementById("number").value;
        if (isNaN(numberFieldValue)) {
            alert("Entrez un numéro valide");
        } else if (numberFieldValue < 0) {
            alert("Seulement des nombres positifs");
        } else {
            alert("La factorielle de " + numberFieldValue + " est: " + factorialize(numberFieldValue));
        }
    });
})();