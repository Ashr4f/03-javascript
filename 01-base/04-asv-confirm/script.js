/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var confirmation = false;

    while (confirmation == false) {
        var userAge;
        do {
            userAge = prompt("Entrez votre âge");
        } while (userAge == "" || userAge == null || userAge == undefined);

        var userSex;
        do {
            userSex = prompt("Entrez votre sexe");
        } while (userSex == "" || userSex == null || userSex == undefined);


        var userCity;
        do {
            userCity = prompt("Entrez votre ville");
        } while (userCity == "" || userCity == null || userCity == undefined);

        var confirmation = confirm(
            "Vérifier vos informations suivantes: \n" +
            "Age: " + userAge + "\n" +
            "Sexe: " + userSex + "\n" +
            "Ville: " + userCity
        );
    }

})();