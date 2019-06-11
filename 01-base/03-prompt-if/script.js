/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var reponse = prompt("Voulez-vous du gâteau? \(OUI \/ NON\)").toLowerCase();

    while (reponse !== "oui") {
        alert("du gâteau, ça ne se refuse pas !");
        reponse = prompt("Voulez-vous du gâteau? \(OUI \/ NON\)").toLowerCase();
    }

    alert("bravo pour le gâteau, profitez-en");

})();