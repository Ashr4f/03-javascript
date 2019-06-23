/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var randomNumber = Math.floor(Math.random() * 100);
    var userGuessedNumber;
    while (isNaN(userGuessedNumber)) {
        userGuessedNumber = parseFloat(prompt("Soumettre un chiffre"));
    }

    if (userGuessedNumber > randomNumber) {
        alert("Vous avez choisi " + userGuessedNumber + ", et votre choix est plus GRAND que moi 😔");
    }
    if (userGuessedNumber < randomNumber) {
        alert("Vous avez choisi " + userGuessedNumber + ", et votre choix est plus PETIT que moi 🙂");
    }
    if (userGuessedNumber == randomNumber) {
        alert("Bravo, vous avez choisi " + userGuessedNumber + ", et votre choix est exactement le MÊME que moi 😮");
    }

})();